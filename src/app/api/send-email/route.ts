import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    console.log('aqui');
    const { name, email, whatsapp, estado, cidade, ramo, pesquisa, lead } = await request.json();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_PUBLIC_MAIL_USER, // Altere para seu email
            pass: process.env.NEXT_PUBLIC_MAIL_PASS, // Altere para sua senha (ou token de aplicação seguro)
        },
    });
    const mailOptions = {
        from: process.env.NEXT_PUBLIC_MAIL_USER,
        to: process.env.NEXT_PUBLIC_MAIL_USER,
        cc: ['linkmetur@gmail.com', 'ljames666@gmail.com'],
        subject: `Novo contato ${name},  cliente interessado`,
        text: `Há um novo cliente interessado em potencial!
Nome: ${name}
Email: ${email}
Whatsapp: ${whatsapp}
Estado: ${estado}
Cidade: ${cidade}
Ramo: ${ramo}
Pesquisa: ${pesquisa}
Lead: ${lead}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return NextResponse.json({ error: 'Erro ao enviar email.' }, { status: 500 });
    }
}
