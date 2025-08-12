// src/app/site/page.tsx
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

export default function Landing() {
    return (
        <main className='font-sans'>
            {/* NAVBAR */}
            <header className='h-[100px] fixed inset-x-0 top-0 z-50 bg-white shadow'>
                <div className=' grid grid-cols-4 md:grid-cols-6 px-8 py-2 gap-4 h-full'>
                    <div className='flex items-center h-full'>
                        <Image
                            src='/logo-linkmetur.jpeg'
                            alt='LinkMe Tur'
                            width={160}
                            height={100}
                            className='h-[70%] md:h-full '
                        />
                    </div>
                    <nav className='flex items-center justify-around flex-wrap col-span-2 md:col-span-4 space-x-2 md:space-x-8 text-gray-800 whitespace-nowrap text-xs md:text-lg'>
                        {[
                            'O que é',
                            'Para quem',
                            'Vantagens',
                            'Perguntas Frequentes',
                            'Turismo Talks',
                        ].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className='hover:text-black transition'
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <div className='flex items-center justify-end'>
                        <Button
                            href='https://linktr.ee/jcomparin'
                            target='_blank'
                            variant='contained'
                            className='rounded-full text-xs whitespace-nowrap'
                            sx={{
                                backgroundColor: '#374151',
                                '&:hover': { backgroundColor: '#4B5563' },
                                px: 4,
                                py: 1.5,
                            }}
                        >
                            <Typography
                                className='text-xs md:text-lg'
                                sx={{
                                    color: 'white !important',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                }}
                            >
                                Fazer parte
                            </Typography>
                        </Button>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <section id='hero' className='relative h-screen w-full '>
                <Image src='/hero.jpg' alt='Banner Hero' fill className='object-cover' priority />
                <div className='absolute inset-0 bg-black/40' />
                <div className='absolute inset-0 flex items-center pt-8 px-8 lg:px-16'>
                    <div className='max-w-2xl'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4'>
                            Transformamos a forma como as empresas fazem negócios com o turismo
                        </h1>
                        <p className='text-lg md:text-xl text-white mb-8'>
                            Conectamos quem precisa com quem resolve
                        </p>
                        <Button
                            href='https://linktr.ee/jcomparin'
                            target='_blank'
                            variant='contained'
                            size='large'
                            className='rounded-full  whitespace-nowrap'
                            sx={{
                                backgroundColor: '#374151',
                                '&:hover': { backgroundColor: '#4B5563' },
                                px: 8,
                                py: 2,
                            }}
                        >
                            <Typography
                                className='text-xs md:text-lg'
                                sx={{
                                    color: 'white !important',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                }}
                            >
                                Quero fazer parte dessa transformação
                            </Typography>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CONECTE-SE */}
            <section id='o-que-é' className='py-16 bg-white text-center px-8'>
                <h2 className='text-3xl font-bold mb-4 inline-block bg-white px-4 text-black'>
                    Conecte-se com quem
                    <br />
                    realmente importa
                </h2>
                <div className='h-1 w-24 bg-[#2BE58F] mx-auto mb-8 rounded' />

                <p className='max-w-3xl mx-auto text-gray-700 mb-4'>
                    Não somos apenas uma plataforma, somos um ecossistema, que conecta empresas de
                    turismo a prestadores de serviços especializados e qualificados.
                </p>
                <p className='max-w-3xl mx-auto text-gray-700 mb-4'>
                    <b>
                        Unimos quem vive o turismo na prática com quem tem as soluções certas para
                        impulsionar esse setor:
                    </b>
                    {/* */}
                    profissionais de marketing, tecnologia, jurídico, contabilidade,
                    sustentabilidade, inovação e muito mais.
                </p>
                <p className='max-w-3xl mx-auto text-gray-700 mb-8'>
                    <b>
                        Valorizamos os prestadores de serviço como peças-chave da engrenagem do
                        turismo.
                    </b>
                    <br />
                    Eles não são apenas fornecedores, são parceiros estratégicos para o
                    desenvolvimento dos destinos. E nós acreditamos que fortalecer os bastidores do
                    turismo é essencial para que os destinos brilhem.
                </p>

                <h3 className='text-2xl font-bold mb-8 text-black'>
                    Na LinkMe Tur você encontra os parceiros certos, de forma rápida, simples e
                    eficiente
                </h3>

                <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-8'>
                    {/* Card 1 */}
                    <div className='p-6 bg-gray-50 rounded-2xl shadow text-center'>
                        <Image
                            src='/141.png'
                            alt='Ícone Empresas do Trade Turístico'
                            width={75}
                            height={70}
                            className='mx-auto mb-4'
                        />
                        <h4 className='font-semibold mb-2 text-black'>
                            Empresas do Trade Turístico
                        </h4>
                        <p className='text-gray-600'>
                            Encontre prestadores de serviços confiáveis com agilidade, reduza custos
                            e modernize seu negócio com soluções sob medida.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className='p-6 bg-gray-50 rounded-2xl shadow text-center'>
                        <Image
                            src='/142.png'
                            alt='Ícone Prestadores de Serviços'
                            width={70}
                            height={70}
                            className='mx-auto mb-4'
                        />
                        <h4 className='font-semibold mb-2 text-black'>Prestadores de Serviços</h4>
                        <p className='text-gray-600'>
                            Ganhe visibilidade, acesse clientes qualificados do turismo e aumente
                            suas oportunidades de negócio com menos esforço.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className='p-6 bg-gray-50 rounded-2xl shadow text-center'>
                        <Image
                            src='/143.png'
                            alt='Ícone Para o Mercado e os Turistas'
                            width={70}
                            height={70}
                            className='mx-auto mb-4'
                        />
                        <h4 className='font-semibold mb-2 text-black'>
                            Para o Mercado e os Turistas
                        </h4>
                        <p className='text-gray-600'>
                            Fortalecemos os bastidores do turismo para que os destinos ofereçam
                            experiências mais autênticas, sustentáveis e encantadoras.
                        </p>
                    </div>
                </div>
            </section>

            {/* PARA QUEM É */}
            <section id='para-quem' className='py-16 px-8 bg-white text-center'>
                <h2 className='text-3xl font-bold mb-4 text-black'>Para quem é a LinkMe Tur?</h2>
                <div className='h-1 w-24 bg-[#2BE58F] mx-auto mb-8 rounded' />
                <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>
                    {/* Card: Para empresas do turismo */}
                    <div className='p-6 bg-gray-50 rounded-2xl shadow text-left'>
                        <Image
                            src='/141.png'
                            alt='Ícone Empresas do Turismo'
                            width={75}
                            height={75}
                            className='mx-auto mb-4'
                        />
                        <h3 className='text-xl font-semibold mb-2 text-black'>
                            Para empresas do turismo
                        </h3>
                        <p className='text-gray-600 mb-4'>
                            <b>Empresas do Trade Turístico:</b> Meios de hospedagem, agências,
                            atrativos, guias, restaurantes, eventos, transporte e produtores locais
                        </p>
                        <ul className='list-disc list-inside text-gray-600 space-y-1'>
                            <li>Encontre prestadores de serviços qualificados em minutos</li>
                            <li>Reduza custos e tempo na contratação</li>
                            <li>Compare avaliações de prestadores e reduza riscos</li>
                            <li>Acesse soluções sob medida para crescer com eficiência</li>
                        </ul>
                    </div>

                    {/* Card: Para prestadores de serviço */}
                    <div className='p-6 bg-gray-50 rounded-2xl shadow text-left'>
                        <Image
                            src='/144.png'
                            alt='Ícone Prestadores de Serviço'
                            width={70}
                            height={70}
                            className='mx-auto mb-4'
                        />
                        <h3 className='text-xl font-semibold mb-2 text-black'>
                            Para prestadores de serviço
                        </h3>
                        <p className='text-gray-600 mb-4'>
                            <b>Prestadores de Serviço:</b>Marketing, tecnologia, jurídico,
                            contabilidade, ESG, inovação e mais
                        </p>
                        <ul className='list-disc list-inside text-gray-600 space-y-1'>
                            <li>Ganhe visibilidade e conecte-se com empresas do setor turístico</li>
                            <li>Reduza o tempo e os custos na captação de clientes</li>
                            <li>
                                Conecte-se a oportunidades reais e que precisam dos seus serviços
                            </li>
                            <li>
                                Destaque-se em uma plataforma que valoriza a qualidade e a inovação
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SEÇÃO “QUERO FAZER PARTE DESSE ECOSSISTEMA” */}
            <section id='vantagens' className='py-16 bg-gray-50 text-center px-8'>
                <div className='max-w-4xl mx-auto flex flex-col items-center'>
                    {/* CTA PRINCIPAL */}
                    <Button
                        href='https://linktr.ee/jcomparin'
                        target='_blank'
                        variant='contained'
                        size='large'
                        sx={{
                            backgroundColor: '#374151',
                            color: 'white !important',
                            fontWeight: 'bold',
                            '&:hover': { backgroundColor: '#4B5563' },
                            px: 8,
                            py: 2,
                            borderRadius: '9999px',
                            textTransform: 'none',
                        }}
                    >
                        Quero fazer parte desse ecossistema
                    </Button>

                    {/* TÍTULO */}
                    <h2 className='mt-12 text-3xl md:text-4xl font-bold text-black'>
                        Quer fazer parte da transformação do turismo gaúcho?
                        <br />
                        Então essa oportunidade é pra você!
                    </h2>
                    <div className='mt-4 h-1 w-24 bg-[#2BE58F] rounded' />

                    {/* DESCRIÇÃO */}
                    <p className='mt-6 max-w-3xl text-gray-700'>
                        Estamos construindo a LinkMe Tur ouvindo quem realmente faz acontecer todos
                        os dias, VOCÊ! Ajude-nos a moldar uma plataforma feita sob medida para as
                        necessidades reais do mercado e do seu negócio, veja como você ganha ao
                        fazer parte da LinkMe Tur:
                    </p>

                    {/* BENEFÍCIOS UNIFICADOS EM IMAGEM */}
                    <section id='Vantagens' className='py-16 text-center'>
                        <Image
                            src='/nova.png'
                            alt='Benefícios do ecossistema LinkMe Tur'
                            width={1600}
                            height={800}
                            className='mx-auto object-contain'
                            priority
                        />
                    </section>

                    {/* CTA FINAL */}
                    <p className='mt-10 font-semibold text-black'>
                        Participar é rápido, gratuito e pode abrir portas valiosas para o futuro do
                        seu negócio!
                    </p>
                    <Button
                        href='https://linktr.ee/jcomparin'
                        target='_blank'
                        variant='contained'
                        size='large'
                        sx={{
                            backgroundColor: '#374151',
                            color: 'white !important',
                            fontWeight: 'bold',
                            '&:hover': { backgroundColor: '#4B5563' },
                            px: 10,
                            py: 2,
                            borderRadius: '9999px',
                            textTransform: 'none',
                            mt: 4,
                        }}
                    >
                        QUERO PARTICIPAR
                    </Button>
                </div>
            </section>

            {/* SEÇÃO “TURISMO MAIS FORTE” */}
            <section id='forte' className='py-16 bg-white text-center px-8'>
                {/* TÍTULO PRINCIPAL */}
                <h2 className='text-3xl md:text-4xl font-bold text-black mb-4'>
                    Vamos juntos construir um turismo mais forte,
                    <br />
                    conectado, moderno e cheio de novas oportunidades para todos!
                </h2>

                {/* LINHA DE DESTAQUE */}
                <div className='h-1 w-24 bg-[#2BE58F] mx-auto rounded' />

                {/* CONTEÚDO CENTRALIZADO */}
                <div className='mt-12 max-w-4xl mx-auto px-4'>
                    <p className='text-3xl md:text-4xl font-bold leading-snug'>
                        O turismo gaúcho precisa de quem acredita no seu futuro, e esse futuro{' '}
                        <br />
                        <span className='text-[#2BE58F]'>começa agora!</span>
                    </p>
                </div>
            </section>

 {/* TURISMO TALKS */}
<section id='Turismo Talks' className='py-16 bg-gray-100'>
    <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden'>
        <div className='grid md:grid-cols-2 gap-8 px-8 py-10 items-center'>
            {/* left column: logo + copy */}
            <div className='space-y-6'>
                <div className='w-full flex justify-center md:justify-start'>
                    <Image
                        src='/turismo-talks-logo.png'
                        alt='Turismo Talks Logo'
                        width={600}
                        height={120}
                        className='object-contain'
                        priority
                    />
                </div>
                            </div>

                            <h3 className='text-3xl md:text-4xl font-bold text-black'>
                                Participe do Turismo Talks: o evento que marca o início dessa
                                jornada.
                            </h3>
                            <p className='text-lg md:text-xl text-gray-700'>
                                Com a participação de diversos atores do trade turístico,
                                representantes dos governos, academia e parceiros estratégicos será
                                realizado o Lançamento Oficial da LinkMe Tur, e você é nosso
                                convidado!
                            </p>
                            <Button
                                href='https://www.instagram.com/reel/DMffP1ox9JP/?igsh=MXU0amN1cDNpOGloeA=='
                                target='_blank'
                                variant='contained'
                                size='large'
                                sx={{
                                    backgroundColor: '#374151',
                                    color: 'white !important',
                                    fontWeight: 'bold',
                                    '&:hover': { backgroundColor: '#4B5563' },
                                    px: 6,
                                    py: 1.5,
                                    borderRadius: '9999px',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                }}
                            >
                                Veja como foi a primeira edição
                            </Button>
                          <div className='mt-6 text-gray-700 text-base'>
                           Teremos novidades em breve
                          </div>
                        {/* right column: hero photo */}
                        <div className='relative w-full h-60 md:h-80 lg:h-[28rem]'>
                            <Image
                                src='/evento-foto.jpg'
                                alt='Foto do evento'
                                fill
                                className='object-cover rounded-xl'
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PERGUNTAS FREQUENTES */}
            <section id='perguntas-frequentes' className='py-16 bg-gray-800 text-white px-8'>
                <h2 className='text-3xl font-bold text-center mb-8'>Perguntas Frequentes</h2>
                <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
                    <div>
                        <h4 className='font-semibold mb-4'>A Plataforma</h4>
                        <details className='mb-2'>
                            <summary>O que é a LinkMe Tur?</summary>
                            <p className='mt-2'>
                                Somos uma plataforma digital inteligente que conecta empresas de
                                turismo a prestadores de serviços qualificados, promovendo
                                eficiência, agilidade e segurança na contratação. Nosso objetivo é
                                impulsionar o crescimento colaborativo e transformar o turismo em
                                uma rede de oportunidades sustentáveis e inovadoras, onde todos
                                prosperam juntos.
                            </p>
                        </details>
                        <details className='mb-2'>
                            <summary>
                                Como a LinkMe Tur conecta empresas de turismo a prestadores?
                            </summary>
                            <p className='mt-2'>
                                Por meio de uma plataforma com filtros inteligentes, perfis
                                detalhados e curadoria de serviços, facilitamos o encontro entre
                                quem precisa de soluções e quem tem a expertise para entregar. Tudo
                                de forma rápida, segura e personalizada para o setor de turismo.
                            </p>
                        </details>
                        <details>
                            <summary>A LinkMe Tur é gratuita?</summary>
                            <p className='mt-2'>
                                Sim. Durante o período de testes (MVP), a plataforma será
                                disponibilizada gratuitamente para empresas de turismo e prestadores
                                de serviços. Após essa fase, os planos serão acessíveis e
                                proporcionais ao porte e às necessidades de cada negócio.
                            </p>
                        </details>
                    </div>
                    <div>
                        <h4 className='font-semibold mb-4'>Empresas de Turismo</h4>
                        <details className='mb-2'>
                            <summary>A LinkMe Tur é pra mim?</summary>
                            <p className='mt-2'>
                                Se você possui uma agência de viagens, hotel, pousada, atrativo
                                turístico, restaurante, empresa de transporte, organiza experiências
                                ou atua com guiamento e receptivo, a LinkMe Tur é pra você! Nossa
                                plataforma é inclusiva e acessível, pensada tanto para profissionais
                                autônomos, como guias de turismo e motoristas particulares, quanto
                                para médias e grandes redes do setor. Se você vive o turismo na
                                prática e quer crescer com mais eficiência, visibilidade e conexões
                                estratégicas esse é o seu lugar.
                            </p>
                        </details>
                        <details className='mb-2'>
                            <summary>
                                Quais tipos de prestadores de serviços posso encontrar na
                                plataforma?
                            </summary>
                            <p className='mt-2'>
                                Você encontrará empresas e profissionais nas áreas de marketing,
                                tecnologia, sustentabilidade, jurídico, contabilidade, design,
                                consultorias, treinamentos, inovação e muito mais. Todas as empresas
                                que agregam valor ao turismo são bem-vindas, independente do tamanho
                                ou número de colaboradores.
                            </p>
                        </details>
                        <details>
                            <summary>
                                Como a LinkMe Tur ajuda a reduzir custos e tempo na contratação?
                            </summary>
                            <p className='mt-2'>
                                Oferecemos uma experiência simples e eficiente, com curadoria de
                                profissionais e ferramentas de busca avançada. Isso reduz o tempo
                                gasto na procura por fornecedores confiáveis e evita custos com
                                contratações mal direcionadas.
                            </p>
                        </details>
                    </div>
                    <div>
                        <h4 className='font-semibold mb-4'>Prestadores de Serviços</h4>
                        <details className='mb-2'>
                            <summary>
                                Como a LinkMe Tur me ajuda a receber propostas relevantes?
                            </summary>
                            <p className='mt-2'>
                                Com filtros inteligentes, perfis estratégicos e segmentação por
                                interesse, a LinkMe Tur aproxima as demandas reais do turismo das
                                soluções que você oferece. Quanto mais claro, atrativo e bem
                                construído for o seu perfil, maiores serão suas chances de
                                visibilidade e conexão com clientes qualificados.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION FINAL */}
            <section id='cta-final' className='py-16 bg-gray-900 text-white text-center px-8'>
                {/* TÍTULO */}
                <h2 className='max-w-3xl mx-auto text-3xl md:text-4xl font-bold mb-4 leading-snug'>
                    Se você quer fazer parte do futuro do turismo venha com a gente!
                </h2>

                {/* LINHA VERDE */}
                <div className='h-1 w-24 bg-[#2BE58F] mx-auto mb-8 rounded' />

                {/* CARDS COM NOVOS ÍCONES */}
                <div className='max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-6'>
                    {[
                        {
                            icon: '/146.png',
                            label: 'Sou Empresa do Trade Turístico',
                            url: 'https://docs.google.com/forms/d/e/1FAIpQLSf9pxhs4WONGMmRALgR5zD_zD4o5xwaXHDdEq48IrRaqGbJuA/viewform',
                        },
                        {
                            icon: '/148.png',
                            label: 'Presto serviço ou quero começar atender o Turismo',
                            url: 'https://docs.google.com/forms/d/e/1FAIpQLSdBfvsG1FvPB3jKTAkFhS1IBzt4yCU5038ps2tt5S_bRi47SA/viewform',
                        },
                        {
                            icon: '/147.png',
                            label: 'Quero saber mais sobre o Turismo Talks',
                            url: 'https://www.sympla.com.br/evento/turismo-talks-noroeste-rs/3026401',
                        },
                    ].map(({ icon, label, url }) => (
                        <a key={label} href={url} target='_blank'>
                            <div className='bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 flex-1 flex flex-col items-center justify-center gap-4'>
                                <Image src={icon} alt={label} width={70} height={70} />
                                <p className='mt-2 text-white font-medium'>{label}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

{/* FOOTER */}
<footer className='py-8 bg-gray-900 px-8'>
    <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='text-white font-bold text-xl'>
            LinkMe<span className='text-[#2BE58F]'>Tur</span>
        </div>
        <div className='text-gray-400 hover:text-white transition'>
            <a href='mailto:contato@linkmetur.com.br'>
                contato@linkmetur.com.br
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
