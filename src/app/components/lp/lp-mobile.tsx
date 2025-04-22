'use client';
import ButtonRegister from './buttonRegister';
import FormRegister from './formRegister';
import styles from './lp.module.css';
import Image from 'next/image';

const LpMobile = () => {
    return (
        <div>
            <div className={styles.bg1Mobile}>
                {/* conecte-se  */}
                <div className={styles.bg1textMobile}>
                    <div className={styles.divider}></div>
                    <h1 className={styles.bg1texth1Mobile}>
                        CONECTE-SE COM QUEM REALMENTE IMPORTA:
                    </h1>
                    <h2 className={styles.bg1texth2Mobile}>
                        Na <span style={{ fontWeight: 'bold' }}>LinkMe Tur</span> você encontra os
                        parceiros certos, de forma rápida, simples e eficiente.
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
            </div>
            <div className={styles.bg2Mobile}>
                <div
                    id='formLP'
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        padding: '1rem 2rem',
                        borderRadius: ' 2rem ',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            marginBottom: '1rem',
                        }}
                    >
                        <div>
                            <Image
                                src='/linkmelp.jpeg'
                                alt='logo linkme'
                                width={130}
                                height={100}
                            />
                        </div>
                        <div>
                            <Image src='/fapergs.jpeg' alt='logo linkme' width={150} height={100} />
                        </div>
                    </div>
                    <div style={{ color: '#151d45' }}>
                        <h1 className='text-[1rem] font-bold text-center mb-4'>
                            FAÇA PARTE DA NOSSA COMUNIDADE
                        </h1>
                        <p className='text-[0.8rem] font-light text-justify mb-8'>
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
            <div className={styles.bg3}>
                <div
                    className={styles.content}
                    style={{
                        padding: '0 2rem',
                    }}
                >
                    <div>
                        <div
                            className={styles.divider}
                            style={{ position: 'relative', top: '0' }}
                        />
                        <h1
                            style={{
                                fontSize: '2rem',
                                marginTop: '1rem',
                            }}
                        >
                            É daqui
                        </h1>
                        <h1
                            style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
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
                                fontSize: '2rem',
                                fontWeight: 'bold',

                                marginBottom: '1rem',
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
                                fontSize: '1rem',
                                marginBottom: '2rem',
                                textAlign: 'justify',
                            }}
                        >
                            A LinkMe Tur é uma iniciativa apoiada a pelo Plano Rio Grande, em um
                            Edital lançado para fomentar startups gaúchas no desenvolvimento de
                            soluções tecnológicas e inovadoras, integrando a estratégia de
                            reconstrução do Estado após a crise climática que atingiu o Rio Grande
                            do Sul em 2024.
                        </p>
                    </div>
                </div>
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
                            fontSize: '1.5rem',
                            fontWeight: 'bold',

                            margin: '1rem 0',
                        }}
                    >
                        <h1>
                            POR QUE ESCOLHER <br /> A LINK ME TUR?
                        </h1>
                    </div>
                    <div
                        style={{
                            width: '35%',
                            margin: '1rem 0',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '1.4rem',
                                fontWeight: 'bold',

                                textAlign: 'justify',
                                color: '#17cb95',
                            }}
                        >
                            AGILIDADE
                        </h1>
                        <p
                            style={{
                                fontSize: '1rem',
                            }}
                        >
                            Conecte-se com parceiros estratégicos em minutos, não em dias.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '35%',
                            margin: '1rem 0',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '1.4rem',
                                fontWeight: 'bold',

                                textAlign: 'justify',
                                color: '#17cb95',
                            }}
                        >
                            CUSTOS REDUZIDOS
                        </h1>
                        <p
                            style={{
                                fontSize: '1rem',
                            }}
                        >
                            Elimine processos burocráticos e economize tempo e dinheiro.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '35%',
                            margin: '1rem 0',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '1.4rem',
                                fontWeight: 'bold',

                                textAlign: 'justify',
                                color: '#17cb95',
                            }}
                        >
                            TRANSPARÊNCIA
                        </h1>
                        <p
                            style={{
                                fontSize: '1rem',
                            }}
                        >
                            Avaliações e portfólios que garantem a qualidade dos serviços.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '35%',
                            margin: '1rem 0',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '1.4rem',
                                fontWeight: 'bold',

                                textAlign: 'justify',
                                color: '#17cb95',
                            }}
                        >
                            VISIBILIDADE
                        </h1>
                        <p
                            style={{
                                fontSize: '1rem',
                            }}
                        >
                            Prestadores ganham destaque e empresas encontram soluções qualificadas.
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
                            padding: '0 2rem',
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
                                    fontSize: '2rem',

                                    marginBottom: '2rem',
                                }}
                            >
                                Como
                                <br />
                                <strong>FUNCIONA?</strong>
                            </h1>
                            <p
                                style={{
                                    fontSize: '1rem',
                                    marginBottom: '2rem',
                                }}
                            >
                                Veja como a <strong>LinkMe Tur</strong> transforma a conexão entre
                                empresas e prestadores de serviços
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

                        paddingBottom: '2rem',
                    }}
                >
                    <div className={styles.divider} style={{ marginTop: '-0.5rem' }}></div>
                    <h1
                        style={{
                            fontSize: '2rem',

                            margin: '1rem 2rem 1rem',
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
                            padding: '0 2rem',
                        }}
                    >
                        <div
                            style={{
                                width: '30%',
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                A PLATAFORMA
                            </h2>
                            <div
                                className={styles.divider}
                                style={{ width: '8rem', height: '0.5rem' }}
                            ></div>
                            <p
                                style={{
                                    fontSize: '0.8rem',
                                    margin: '1rem 0 1rem 0',
                                }}
                            >
                                O que é a LinkMe Tur?
                            </p>
                            <p
                                style={{
                                    fontSize: '0.8rem',
                                    margin: '1rem 0 1rem 0',
                                }}
                            >
                                {' '}
                                Como a LinkMe Tur funciona?
                            </p>
                            <p
                                style={{
                                    fontSize: '0.8rem',
                                    margin: '1rem 0 0 0',
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
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                EMPRESAS
                            </h2>
                            <div
                                className={styles.divider}
                                style={{ width: '8rem', height: '0.5rem' }}
                            ></div>
                            <p
                                style={{
                                    fontSize: '0.8rem',
                                    margin: '1rem 0 1rem 0',
                                }}
                            >
                                Como minha empresa pode se cadastrar na LinkMe Tur?
                            </p>
                            <p
                                style={{
                                    fontSize: '0.8rem',
                                    margin: '1rem 0 1rem 0',
                                }}
                            >
                                Quais tipos de prestadores de serviços posso encontrar na
                                plataforma?
                            </p>
                            <p
                                style={{
                                    fontSize: '0.8rem',
                                    margin: '1rem 0 0 0',
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
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                PRESTADORES
                            </h2>
                            <div
                                className={styles.divider}
                                style={{ width: '8rem', height: '0.5rem' }}
                            ></div>
                            <p
                                style={{
                                    fontSize: '0.8rem',
                                    margin: '1rem 0 1rem 0',
                                }}
                            >
                                Como posso me cadastrar como prestador de serviços na LinkMe Tur?
                            </p>
                            <p
                                style={{
                                    fontSize: '0.8rem',
                                    margin: '1rem 0 1rem 0',
                                }}
                            >
                                Quais são os benefícios de ser um prestador na LinkMe Tur?
                            </p>
                            <p
                                style={{
                                    fontSize: '0.8rem',
                                    margin: '1rem 0 0 0',
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
                    }}
                >
                    <h1
                        style={{
                            fontSize: '1.5rem',
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
                            padding: '2rem',
                            gap: '1.5rem',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'flex-start',
                                backgroundColor: '#f4f2f1',
                                borderRadius: '1rem',
                                padding: '1rem ',
                                fontSize: '0.8rem',
                                height: '20rem',
                                gap: '0.5rem',
                                boxShadow: '0px 0px 10px -4px rgba(33, 31, 31, 0.61)',
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                EMPRESAS
                            </h1>
                            <p> Encontre prestadores qualificados em minutos.</p>
                            <p> Reduza custos e tempo na contratação.</p>
                            <p>Compare e veja avaliações de prestadores antes da contratação.</p>
                            <p> Acesso a soluções inovadoras e sustentáveis.</p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'flex-start',
                                backgroundColor: '#f4f2f1',
                                borderRadius: '1rem',
                                padding: '1rem ',
                                fontSize: '0.8rem',
                                height: '20rem',
                                gap: '0.5rem',
                                boxShadow: '0px 0px 10px -4px rgba(33, 31, 31, 0.61)',
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                PRESTADORES
                            </h1>
                            <p>Ganhe visibilidade e conecte-se com empresas do setor turístico.</p>
                            <p> Reduza o tempo e os custos de captação de clientes.</p>
                            <p>Acesso a oportunidades reais e parcerias estratégicas.</p>
                            <p>
                                Destaque-se em uma plataforma que valoriza a qualidade e a inovação.
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

                        padding: '0 2rem',
                    }}
                >
                    <div className={styles.divider}></div>
                    <h1
                        style={{
                            fontSize: '1.5rem',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            margin: '2rem 0',
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
    );
};
export default LpMobile;
