import { NextRequest, NextResponse } from "next/server";
import {
  INDEXNOW_KEY,
  INDEXNOW_HOST,
  INDEXNOW_ENDPOINT,
} from "@/lib/indexnow.mjs";

/* Reenvío manual a IndexNow. Exige el secreto INDEXNOW_SECRET en la cabecera
   `Authorization: Bearer …`; sin él configurado, la ruta no existe. Antes
   aceptaba cualquier POST y prestaba la clave del sitio a quien lo enviara.
   El aviso automático de cada despliegue lo hace scripts/notify-indexnow.mjs. */
export async function POST(req: NextRequest) {
  const secreto = process.env.INDEXNOW_SECRET;
  if (!secreto) {
    return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  }
  if (req.headers.get("authorization") !== `Bearer ${secreto}`) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const { urls } = await req.json();

    /* Solo direcciones del propio sitio. */
    if (
      !urls ||
      !Array.isArray(urls) ||
      urls.length === 0 ||
      !urls.every((u) => typeof u === "string" && u.startsWith(`https://${INDEXNOW_HOST}/`))
    ) {
      return NextResponse.json(
        { error: "Se requiere un array de URLs" },
        { status: 400 }
      );
    }

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      submitted: urls.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al enviar a IndexNow" },
      { status: 500 }
    );
  }
}
