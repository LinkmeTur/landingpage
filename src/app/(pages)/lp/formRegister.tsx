import { Form, Input, Button, RadioGroup, Radio } from '@heroui/react';
import { useState } from 'react';

const FormRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [ramo, setRamo] = useState('');
    const [pesquisa, setPesquisa] = useState('');
    const [lead, setLead] = useState('');

    return (
        <Form>
            <Input
                type='text'
                placeholder='Nome'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type='text'
                placeholder='Whatsapp'
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Input
                type='text'
                placeholder='Estado'
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
            />
            <Input
                type='text'
                placeholder='Cidade'
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
            />

            <RadioGroup label=' Eu sou/represento um(a) :' value={ramo} onValueChange={setRamo}>
                <Radio value='Empresa'>Empresa do Setor de Turismo</Radio>
                <Radio value='Prestador'>Prestador de Serviços para o mercado de Turismo</Radio>
            </RadioGroup>
            <RadioGroup
                label=' Você aceita participar de uma breve pesquisa e fazer
 parte da etapa de validação da Plataforma LinkMe Tur?'
                value={pesquisa}
                onValueChange={setPesquisa}
            >
                <Radio value='sim'>Quero participar e receber benefícios.</Radio>
                <Radio value='não'> Não quero os benefícios.</Radio>
            </RadioGroup>
            <RadioGroup label=' Como conheceu a LinkMe Tur? ' value={lead} onValueChange={setLead}>
                <Radio value='Redes Sociais'>Redes Sociais</Radio>
                <Radio value='Contato Direto'>Contato Direto</Radio>
                <Radio value='Evento'>Evento</Radio>
                <Radio value='Indicação'>Indicação</Radio>
                <Radio value='Outros'>Outros</Radio>
            </RadioGroup>

            <Button> enviar</Button>
        </Form>
    );
};

export default FormRegister;
