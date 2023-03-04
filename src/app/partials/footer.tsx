import Image from 'next/image';
import List from './footer/list';

export default function Footer(){

  return(

    <footer className='
      flex
      justify-center
      bg-[#23323B]
    '>

      <div className='
        flex flex-col
        md:items-center
        gap-7 md:gap-14
        px-5 py-7 md:py-14
        w-full
        max-w-screen-2xl
      '>

        <div className='
          flex flex-col md:flex-row
          gap-5
        '>

          <div className='
            flex flex-col
            gap-7
          '>

            <Image src='/assets/images/abcd.png' width={237} height={69} alt='ABCD' />

            <div className='
              flex flex-col 
              gap-3.5
              items-start
            '>

              <h5 className='
                uppercase
                text-white
              '>
                Mapa do site
              </h5>

              <List
                text='Home'
              />

              <List
                text='Soluções'
              />

              <List
                text='Sobre a Innova'
              />

              <List
                text='Consultores'
              />

              <List
                text='Trabalhe conosco'
              />

              <List
                text='Simulações de empréstimo'
              />

              <List
                text='FAQ'
              />
              
              <List
                text='Contato'
              />

              <List
                text='Conversar pelo whatsapp'
              />

            </div>

          </div>

          <h6 className='
            w-full
            text-white
          '>
            Fazemos parte da ABCD e atendemos às Orientações <br />de Conduta em nosso Código de Ética e Autorregulação.
          </h6>

          <div className='
            flex flex-col gap-7
          '>

            <h6 className='
              text-white
            '>
              A Innova não é uma instituição financeira e não realiza operações de crédito diretamente. A Innova é uma plataforma digital que atua como correspondente Bancário e Sociedade de Crédito Direto para facilitar o processo de contratação de empréstimos. Como Correspondente Bancário, seguimos as diretrizes da Resolução nº 3.954 e como Sociedade de Crédito Direto a resolução nº 4.656, ambas do Banco Central do Brasil. Somos correspondentes bancários das seguintes instituições: Família Paulista Companhia Hipotecária (CNPJ 53.146.221/0001-39), Companhia Hipotecária Piratini - CHP (CNPJ 18.282.093/0001-50), Santana Financeira (CNPJ 05.503.849/0001-00), Sorocred Crédito Financiamento e Investimento S/A (CNPJ 04.814.563/0001-74) e Creditas Sociedade de Crédito Direto S/A (CNPJ 32.997.490/0001-39).
            </h6>

            <h6 className='
              text-white
            '>
              A Innova atua como correspondente bancário da Socinal S.A. – Crédito, financiamento e investimento (CNPJ 03.881.423/0001-56) e da Creditas Sociedade de Crédito Direto S.A. (CNPJ 32.997.490/0001-39) nos termos do artigo 2º, da Resolução CMN nº 3.954, de 24 de fevereiro de 2011.
            </h6>

            <h6 className='
              text-white
            '>
              Informações adicionais relativas ao Empréstimo com Garantia de Automóvel: mínimo 18 meses e máximo 60 meses - Empréstimo com Garantia de Imóvel: mínimo 60 meses e máximo 240 meses. Exemplo com Garantia de Imóvel - Empréstimo de R$ 100.000,00 para pagar em 20 anos (240 meses) – Prestação inicial de R$ 1.144.63, com uma taxa de juros de 0,84% ao mês + IPCA, Sistema de Amortização Price. CET de 12,50% ao ano - Empréstimo Consignado Privado: o prazo de pagamento mínimo é de 6 meses e máximo de 48 meses - Custo Efetivo Total (CET): mínimo de 18,52% e máximo de 60,78% ao ano. Exemplo - Empréstimo de R$ 15.000,00 para pagamento em 48 meses – Total de 48 parcelas de R$ 433,65. Valor total a pagar igual a R$ 20.815,26 com uma taxa de juros de 0,99% ao mês (16,62% ao ano).
            </h6>

            <h6 className='
              text-white
            '>
              Creditas Soluções Financeiras Ltda. - CNPJ 17.770.708/0001-24, localizada na Av. Engenheiro Luís Carlos Berrini, 105, 11º e 12º andares, conjuntos 112 e 122 - Itaim Bibi, São Paulo - SP, 04571-010 | Creditas Sociedade de Crédito Direto S/A - CNPJ 32.997.490/0001-39, localizada na Av. Engenheiro Luís Carlos Berrini, 105, 12º andar, conjunto 121 - Itaim Bibi, São Paulo - SP, 04571-010 | Creditoo Tecnologia, Soluções Financeiras e Serviços LTDA - CNPJ 26.643.079/0001-62, localizada na Praça Professor José Lannes, nº40, 8º andar, Edifício Berrini 500, Brooklyn Paulista, São Paulo – SP, 04571-100
            </h6>

          </div>

        </div>

        <div className='
          flex flex-col md:flex-row
          items-start md:items-center
          gap-5
        '>

          <a href='/'>Central da Transparência</a>
          <h5 className='text-white hidden md:blog'>|</h5>
          <a href='/'>Termos de uso</a>
          <h5 className='text-white hidden md:blog'>|</h5>
          <a href='/'>Política de privacidade</a>
          <h5 className='text-white hidden md:blog'>|</h5>
          <a href='/'>Ouvidoria dos parceiros</a>
          <h5 className='text-white hidden md:blog'>|</h5>
          <a href='/'>Portal de conteúdo sobre finanças</a>
          <h5 className='text-white hidden md:blog'>|</h5>
          <a href='/'>Instagram</a>
          <h5 className='text-white hidden md:blog'>|</h5>
          <a href='/'>Facebook</a>
          
        </div>

        <Image src='/assets/images/icon-secure.png' width={84} height={48} alt='Segurança garantida' />

        <h6 className='
          text-center
          text-white
        '>2023 © Todos os direitos reservados. Innova Consignado</h6>

      </div>

    </footer>

  )

}