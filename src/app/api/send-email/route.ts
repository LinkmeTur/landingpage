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
            user: 'jamerson@linkmetur.com.br', // Altere para seu email
            pass: 'jcfz frad jgve ztci', // Altere para sua senha (ou token de aplicação seguro)
        },
    });
    const mailOptions = {
        from: 'jamerson@linkmetur.com.br',
        to: 'contato@linkmetur.com.br',
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
