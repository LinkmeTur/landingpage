'use client';
import { Form, Input, RadioGroup, Radio } from '@heroui/react';
import { useState } from 'react';
import ButtonRegister from './buttonRegister';

const FormRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [ramo, setRamo] = useState('');
    const [pesquisa, setPesquisa] = useState('');
    const [lead, setLead] = useState('');

    const formatPhone = (value: string): string => {
        const cleaned = value.replace(/\D/g, ''); // Remove caracteres não numéricos
        const length = cleaned.length;
        if (length > 11) return cleaned.slice(0, 11); // Garante no máximo 11 dígitos

        if (length <= 1) {
            return cleaned;
        } else if (length <= 2) {
            return `(${cleaned}`;
        } else if (length <= 3) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
        } else if (length <= 7) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 3)} ${cleaned.slice(3)}`;
        } else {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 3)} ${cleaned.slice(
                3,
                7,
            )}-${cleaned.slice(7)}`;
        }
    };

    const validatePhone = (value: string): boolean => {
        return value.replace(/\D/g, '').length === 11; // Verifica se há exatamente 11 dígitos
    };

    const handleSubmit = async () => {
        // Validações
        if (!name || !email || !whatsapp || !estado || !cidade || !ramo || !pesquisa || !lead) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const formData = {
            name,
            email,
            whatsapp: formatPhone(whatsapp),
            estado,
            cidade,
            ramo,
            pesquisa,
            lead,
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('E-mail enviado com sucesso!');

                setName('');
                setEmail('');
                setWhatsapp('');
                setEstado('');
                setCidade('');
                setRamo('');
                setPesquisa('');
                setLead('');
            } else {
                const errorData = await response.json();
                alert(errorData.error || 'Erro ao enviar e-mail.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar e-mail.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type='text'
                label={<h1 className='text-default-900'>Nome:</h1>}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type='email'
                label={<h1 className='text-default-900'>E-mail</h1>}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type='text'
                label={<h1 className='text-default-900'>WhatsApp</h1>}
                value={formatPhone(whatsapp)}
                onChange={(e) => setWhatsapp(formatPhone(e.target.value))}
                placeholder='(XX) X XXXX-XXXX'
                validate={(value) =>
                    validatePhone(value)
                        ? null
                        : 'Número inválido! Insira os 11 dígitos corretamente.'
                }
            />

            <Input
                type='text'
                label={<h1 className='text-default-900'>Estado</h1>}
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
            />
            <Input
                type='text'
                label={<h1 className='text-default-900'>Cidade</h1>}
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
            />

            <RadioGroup
                className='w-[100%] text-default-900 text-sm '
                color='default'
                label={
                    <h2 className='p-4 bg-default-100 rounded-xl '>Eu sou/represento um(a) :</h2>
                }
                value={ramo}
                onValueChange={setRamo}
            >
                <Radio value='Empresa'>
                    <span className='text-default-900 text-sm'> Empresa do Setor de Turismo</span>
                </Radio>
                <Radio value='Prestador'>
                    <span className='text-default-900 text-sm'>
                        Prestador de Serviços para o mercado de Turismo
                    </span>
                </Radio>
            </RadioGroup>
            <RadioGroup
                className='w-[100%] text-default-900 text-sm '
                color='default'
                label={
                    <h2 className='p-4 bg-default-100 rounded-xl '>
                        {' '}
                        Você aceita participar de uma breve pesquisa e fazer parte da etapa de
                        validação da Plataforma LinkMe Tur?
                    </h2>
                }
                value={pesquisa}
                onValueChange={setPesquisa}
            >
                <Radio value='sim'>
                    <span className='text-default-700 text-sm'>
                        Quero participar e receber benefícios.
                    </span>
                </Radio>
                <Radio value='não'>
                    <span className='text-default-700 text-sm'> Não quero os benefícios.</span>
                </Radio>
            </RadioGroup>
            <RadioGroup
                className='w-[100%] text-default-900 text-sm '
                color='default'
                label={
                    <h2 className='p-4 bg-default-100 rounded-xl '>
                        {' '}
                        Como conheceu a LinkMe Tur?{' '}
                    </h2>
                }
                value={lead}
                onValueChange={setLead}
            >
                <Radio value='Redes Sociais'>
                    <span className='text-default-700 text-sm'>Redes Sociais</span>
                </Radio>
                <Radio value='Contato Direto'>
                    <span className='text-default-700 text-sm'>Contato Direto</span>
                </Radio>
                <Radio value='Evento'>
                    <span className='text-default-700 text-sm'>Evento</span>
                </Radio>
                <Radio value='Indicação'>
                    <span className='text-default-700 text-sm'>Indicação</span>
                </Radio>
                <Radio value='Outros'>
                    <span className='text-default-700 text-sm'>Outros</span>
                </Radio>
            </RadioGroup>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <ButtonRegister title='Enviar' action={handleSubmit} />
            </div>
        </Form>
    );
};

export default FormRegister;
