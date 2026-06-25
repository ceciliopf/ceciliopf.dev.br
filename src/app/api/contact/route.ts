import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL ?? "ceciliopf@gmail.com"],
      subject: `[Portfolio] Nova mensagem de ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #4f46e5; margin-bottom: 24px;">Nova mensagem do portfólio</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 100px;">Nome</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">E-mail</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                <a href="mailto:${email}" style="color: #4f46e5;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #374151; vertical-align: top;">Mensagem</td>
              <td style="padding: 10px 0; color: #111827; white-space: pre-line;">${message}</td>
            </tr>
          </table>
          
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            Enviado pelo formulário de contato do portfólio · ceciliopf.dev.br
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend error]", error);
      return NextResponse.json(
        { error: "Erro ao enviar mensagem. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API error]", err);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
