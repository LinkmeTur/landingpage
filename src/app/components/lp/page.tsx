'use client';
import ButtonRegister from './buttonRegister';
import FormRegister from './formRegister';
import styles from './lp.module.css';
import Image from 'next/image';
const LP = () => {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <div className={styles.bg1}>
                {/* conecte-se  */}
                <div className={styles.bg1text}>
                    <div className={styles.divider}></div>
                    <h1 className={styles.bg1texth1}>CONECTE-SE COM QUEM REALMENTE IMPORTA:</h1>
                    <h2 className={styles.bg1texth2}>
                        Na <span style={{ fontWeight: 'bold' }}>LinkMe Tur</span> você encontra os
                        <br /> parceiros certos, de forma rápida,
                        <br />
                        simples e eficiente.
                    </h2>
                    <div className={styles.divider}></div>
                    <p className={styles.bg1textp}>
                        Para empresas: encontre os melhores prestadores.
                        <br /> Para prestadores: ganhe visibilidade. <br />
                        Com a LinkMe Tur, a inovação e as oportunidades estão <br />a um clique de
                        distância
                    </p>
                </div>
                {/* formulario */}
                <div
                    id='formLP'
                    style={{
                        backgroundColor: 'white',
                        width: '45%',
                        padding: '2rem 4rem',
                        display: 'flow',
                        float: 'right',
                        borderRadius: '0 0 2rem 2rem ',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-around',
                            marginBottom: '2rem',
                        }}
                    >
                        <div>
                            <Image
                                src='/linkmelp.jpeg'
                                alt='logo linkme'
                                width={300}
                                height={100}
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <Image src='/fapergs.jpeg' alt='logo linkme' width={250} height={100} />
                        </div>
                    </div>
                    <div style={{ color: '#151d45' }}>
                        <h1 className='text-[1.5rem] font-bold text-center mb-4'>
                            FAÇA PARTE DA NOSSA COMUNIDADE
                        </h1>
                        <p className='text-[1.2rem] font-light text-justify mb-8'>
                            Faça seu Cadastro e nos ajude a construir a Plataforma que está mudando
                            o Turismo Gaúcho. Os parceiros cadastrados terão um período de Acesso
                            Premium Gratuito à Plataforma! Não fique de fora!
                        </p>
                    </div>
                    <div>
                        <FormRegister />
                    </div>
                </div>
            </div>
            <div className={styles.bg2}></div>
            <div className={styles.bg3}>
                <div
                    className={styles.content}
                    style={{
                        padding: '0 4rem',
                    }}
                >
                    <div
                        style={{
                            width: '55%',
                        }}
                    >
                        <div
                            className={styles.divider}
                            style={{ position: 'relative', top: '0' }}
                        />
                        <h1
                            style={{
                                fontSize: '3rem',

                                fontFamily: 'var(--font-roboto)',

                                marginTop: '1.5rem',
                            }}
                        >
                            É daqui
                        </h1>
                        <h1
                            style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-roboto)',
                            }}
                        >
                            É PRA TI
                        </h1>
                        <div style={{ display: 'flex', marginTop: '1.5rem' }}>
                            <div className={styles.divider} />
                            <div className={styles.divider2} />
                            <div className={styles.divider3} />
                        </div>
                        <p
                            style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-roboto)',
                                marginBottom: '1.5rem',
                            }}
                        >
                            UMA INICIATIVA COM <br />
                            APOIO DA FAPERGS!
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'end',
                            alignItems: 'center',
                        }}
                    >
                        <p
                            style={{
                                fontSize: '1.2rem',
                                fontFamily: 'var(--font-roboto)',
                                textAlign: 'justify',
                            }}
                        >
                            A LinkMe Tur é uma iniciativa apoiada a pelo Plano Rio Grande, em um
                            Edital lançado para fomentar startups gaúchas no desenvolvimento de
                            soluções tecnológicas e inovadoras, integrando a estratégia de
                            reconstrução do Estado após a crise climática que atingiu o Rio Grande
                            do Sul em 2024.
                        </p>
                    </div>{' '}
                </div>
                <div className={styles.bg}>
                    <div
                        className={styles.divider}
                        style={{
                            position: 'relative',
                            top: '-5px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '2.2rem',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-roboto)',
                                margin: '2rem 0',
                            }}
                        >
                            <h1>
                                POR QUE ECOLHER <br /> A LINK ME TUR?
                            </h1>
                        </div>
                        <div
                            style={{
                                width: '35%',
                                margin: '2rem 0',
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--font-roboto)',
                                    textAlign: 'justify',
                                    color: '#17cb95',
                                }}
                            >
                                AGILIDADE
                            </h1>
                            <p
                                style={{
                                    fontSize: '1.3rem',
                                    fontFamily: 'var(--font-roboto)',
                                }}
                            >
                                Conecte-se com parceiros estratégicos em minutos, não em dias.
                            </p>
                        </div>
                        <div
                            style={{
                                width: '35%',
                                margin: '2rem 0',
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--font-roboto)',
                                    textAlign: 'justify',
                                    color: '#17cb95',
                                }}
                            >
                                CUSTOS REDUZIDOS
                            </h1>
                            <p
                                style={{
                                    fontSize: '1.3rem',
                                    fontFamily: 'var(--font-roboto)',
                                }}
                            >
                                Elimine processos burocráticos e economize tempo e dinheiro.
                            </p>
                        </div>
                        <div
                            style={{
                                width: '35%',
                                margin: '2rem 0',
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--font-roboto)',
                                    textAlign: 'justify',
                                    color: '#17cb95',
                                }}
                            >
                                TRANSPARÊNCIA
                            </h1>
                            <p
                                style={{
                                    fontSize: '1.3rem',
                                    fontFamily: 'var(--font-roboto)',
                                }}
                            >
                                Avaliações e portfólios que garantem a qualidade dos serviços.
                            </p>
                        </div>
                        <div
                            style={{
                                width: '35%',
                                margin: '2rem 0',
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--font-roboto)',
                                    textAlign: 'justify',
                                    color: '#17cb95',
                                }}
                            >
                                VISIBILIDADE
                            </h1>
                            <p
                                style={{
                                    fontSize: '1.3rem',
                                    fontFamily: 'var(--font-roboto)',
                                }}
                            >
                                Prestadores ganham destaque e empresas encontram soluções
                                qualificadas.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                color: '#535353',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                padding: '0 4rem',
                            }}
                        >
                            <div
                                style={{
                                    width: '30%',
                                    zIndex: '99',
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: '3rem',
                                        fontFamily: 'var(--font-roboto)',
                                        marginBottom: '3rem',
                                    }}
                                >
                                    Como
                                    <br />
                                    <strong>FUNCIONA?</strong>
                                </h1>
                                <p
                                    style={{
                                        fontSize: '1.5rem',
                                        fontFamily: 'var(--font-roboto)',
                                        marginBottom: '3rem',
                                    }}
                                >
                                    Veja como a <strong>LinkMe Tur</strong> transforma a conexão
                                    entre empresas e prestadores de serviços
                                </p>
                                <ButtonRegister
                                    title='CADASTRE_SE'
                                    action={() => {
                                        const form = document.getElementById('formLP');
                                        if (form) {
                                            form.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <Image src='/4.png' alt='' width={800} height={100} />
                            </div>
                        </div>
                        <div>
                            <Image src='/5.png' alt='' width={1000} height={100} />.
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: 'inherit',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'var(--font-roboto)',
                            paddingBottom: '2rem',
                        }}
                    >
                        <div className={styles.divider} style={{ marginTop: '-0.5rem' }}></div>
                        <h1
                            style={{
                                fontSize: '2.5rem',

                                margin: '2rem 4rem 2rem',
                                fontWeight: 'bold',
                                alignSelf: 'flex-start',
                            }}
                        >
                            PERGUNTAS FREQUENTES
                        </h1>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                width: '100%',
                                padding: '0 4rem',
                            }}
                        >
                            <div
                                style={{
                                    width: '30%',
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    A PLATAFORMA
                                </h2>
                                <div className={styles.divider}></div>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        margin: '2rem 0 2rem 0',
                                    }}
                                >
                                    O que é a LinkMe Tur?
                                </p>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        margin: '2rem 0 2rem 0',
                                    }}
                                >
                                    {' '}
                                    Como a LinkMe Tur funciona?
                                </p>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        margin: '2rem 0 0 0',
                                    }}
                                >
                                    A LinkMe Tur é gratuita?
                                </p>
                            </div>
                            <div
                                style={{
                                    width: '30%',
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    EMPRESAS
                                </h2>
                                <div className={styles.divider}></div>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        margin: '2rem 0 2rem 0',
                                    }}
                                >
                                    Como minha empresa pode se cadastrar na LinkMe Tur?
                                </p>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        margin: '2rem 0 2rem 0',
                                    }}
                                >
                                    Quais tipos de prestadores de serviços posso encontrar na
                                    plataforma?
                                </p>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        margin: '2rem 0 0 0',
                                    }}
                                >
                                    Como a LinkMe Tur ajuda a reduzir custos e tempo na contratação?
                                </p>
                            </div>
                            <div
                                style={{
                                    width: '30%',
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    PRESTADORES
                                </h2>
                                <div className={styles.divider}></div>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        margin: '2rem 0 2rem 0',
                                    }}
                                >
                                    Como posso me cadastrar como prestador de serviços na LinkMe
                                    Tur?
                                </p>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        margin: '2rem 0 2rem 0',
                                    }}
                                >
                                    Quais são os benefícios de ser um prestador na LinkMe Tur?
                                </p>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        margin: '2rem 0 0 0',
                                    }}
                                >
                                    Como a LinkMe Tur me ajuda a receber propostas relevantes?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#535353',
                            fontFamily: 'var(--font-roboto)',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            PRONTO PARA <br />
                            TRANSFORMAR O SEU NEGÓCIO ?
                        </h1>
                        <div className={styles.divider}></div>
                        <div
                            style={{
                                display: 'flex',
                                color: '#535353',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                padding: '2rem 4rem',
                                gap: '3rem',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-start',
                                    backgroundColor: '#f4f2f1',
                                    borderRadius: '3rem',
                                    padding: '2rem 4rem',
                                    fontSize: '1rem',
                                    height: '20rem',
                                    gap: '1rem',
                                    boxShadow: '0px 0px 10px -4px rgba(33, 31, 31, 0.61)',
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    EMPRESAS
                                </h1>
                                <p> Encontre prestadores qualificados em minutos.</p>
                                <p> Reduza custos e tempo na contratação.</p>
                                <p>
                                    Compare e veja avaliações de prestadores antes da contratação.
                                </p>
                                <p> Acesso a soluções inovadoras e sustentáveis.</p>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-start',
                                    backgroundColor: '#f4f2f1',
                                    borderRadius: '3rem',
                                    padding: '2rem 4rem',
                                    fontSize: '1rem',
                                    height: '20rem',
                                    gap: '1rem',
                                    boxShadow: '0px 0px 10px -4px rgba(33, 31, 31, 0.61)',
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    PRESTADORES
                                </h1>
                                <p>
                                    Ganhe visibilidade e conecte-se com empresas do setor turístico.
                                </p>
                                <p> Reduza o tempo e os custos de captação de clientes.</p>
                                <p>Acesso a oportunidades reais e parcerias estratégicas.</p>
                                <p>
                                    Destaque-se em uma plataforma que valoriza a qualidade e a
                                    inovação.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: 'inherit',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'var(--font-roboto)',
                            padding: '0 4rem',
                            height: '25rem',
                        }}
                    >
                        <div className={styles.divider}></div>
                        <h1
                            style={{
                                fontSize: '2rem',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                margin: '4rem 0',
                            }}
                        >
                            JUNTE-SE À LINKME TUR E FAÇA PARTE DE UM ECOSSISTEMA TURÍSTICO MAIS
                            CONECTADO, INOVADOR E SUSTENTÁVEL.
                        </h1>
                        <ButtonRegister
                            title='CADASTRE_SE'
                            action={() => {
                                const form = document.getElementById('formLP');
                                if (form) {
                                    form.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LP;
