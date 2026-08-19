import {
  CalendarCheck,
  ExternalLink,
  Heart,
  MapPin,
  MessageCircle,
  Scissors,
  Sparkles,
  Star,
} from 'lucide-react'
import type { CSSProperties } from 'react'
import './App.css'
import blackAlmond from './assets/catalog/black-almond.jpg'
import blueFrench from './assets/catalog/blue-french.jpg'
import pedicureNude from './assets/catalog/pedicure-nude.jpg'
import profileMain from './assets/catalog/profile-main.jpg'
import profileSecondary from './assets/catalog/profile-secondary.jpg'
import redAlmond from './assets/catalog/red-almond.jpg'
import redPinkGlitter from './assets/catalog/red-pink-glitter.jpg'
import silverFrench from './assets/catalog/silver-french.jpg'
import turquoiseMarble from './assets/catalog/turquoise-marble.jpg'
import whiteGold from './assets/catalog/white-gold.jpg'
import wineElegance from './assets/catalog/wine-elegance.jpg'

type Service = {
  name: string
  price: string
  description: string
  category: 'Alongamentos' | 'Maos e pes' | 'Bem-estar'
  image: string
}

type PortfolioImage = {
  src: string
  alt: string
}

function envText(value: string | undefined, fallback: string) {
  return value?.trim() || fallback
}

const business = {
  name: envText(import.meta.env.VITE_BUSINESS_NAME, 'Yasmin Nail Designer'),
  subtitle: envText(
    import.meta.env.VITE_BUSINESS_SUBTITLE,
    'Alongamento • Gel • Nail Art',
  ),
  city: envText(import.meta.env.VITE_BUSINESS_CITY, 'Uberlandia - MG'),
  rating: envText(import.meta.env.VITE_BUSINESS_RATING, '5,0'),
  whatsapp: envText(import.meta.env.VITE_WHATSAPP_NUMBER, '553491257487'),
}

const schedulingUrl = envText(
  import.meta.env.VITE_SCHEDULING_URL,
  'https://cal.com/marcos-nascimento-yvrlcn',
)

const services: Service[] = [
  {
    name: 'Alongamento fibra de vidro',
    price: 'R$ 180',
    description: 'Qualquer formato, sem decoração e sem reconstrução.',
    category: 'Alongamentos',
    image: redPinkGlitter,
  },
  {
    name: 'Manutenção até 30 dias',
    price: 'R$ 100',
    description: 'Manutenção do alongamento em fibra de vidro.',
    category: 'Alongamentos',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=360&h=460&q=82',
  },
  {
    name: 'Manutenção 31 a 34 dias',
    price: 'R$ 120',
    description: 'Manutenção do alongamento dentro do prazo estendido.',
    category: 'Alongamentos',
    image: silverFrench,
  },
  {
    name: 'Manicure tradicional',
    price: 'R$ 40',
    description: 'Cuidado tradicional para as mãos com acabamento delicado.',
    category: 'Maos e pes',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=360&h=460&q=82',
  },
  {
    name: 'Pedicure tradicional',
    price: 'R$ 40',
    description: 'Cuidado tradicional para os pés com conforto.',
    category: 'Maos e pes',
    image: pedicureNude,
  },
  {
    name: 'Mão e pé tradicional',
    price: 'R$ 60',
    description: 'Manicure e pedicure tradicional no mesmo atendimento.',
    category: 'Maos e pes',
    image: whiteGold,
  },
  {
    name: 'Manicure em gel',
    price: 'R$ 70',
    description: 'Esmaltação em gel para as mãos.',
    category: 'Maos e pes',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=360&h=460&q=82',
  },
  {
    name: 'Pedicure em gel',
    price: 'R$ 70',
    description: 'Esmaltação em gel para os pés.',
    category: 'Maos e pes',
    image:
      'https://images.pexels.com/photos/8945996/pexels-photo-8945996.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=360&h=460',
  },
  {
    name: 'Mão e pé em gel',
    price: 'R$ 110',
    description: 'Manicure e pedicure com esmaltação em gel.',
    category: 'Maos e pes',
    image: blueFrench,
  },
  {
    name: 'Escalda pés terapêutico',
    price: 'R$ 80',
    description: 'Experiência relaxante com ervas medicinais e massagem.',
    category: 'Bem-estar',
    image:
      'https://images.pexels.com/photos/15949785/pexels-photo-15949785.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=360&h=460',
  },
  {
    name: 'Escalda pés + pedicure',
    price: 'R$ 110',
    description: 'Escalda pés terapêutico combinado com pedicure.',
    category: 'Bem-estar',
    image:
      'https://images.pexels.com/photos/18441299/pexels-photo-18441299/free-photo-of-beautician-working-on-pedicure.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=360&h=460',
  },
  {
    name: 'Escalda pés + pedicure + manicure',
    price: 'R$ 140',
    description: 'Atendimento completo com relaxamento, pés e mãos.',
    category: 'Bem-estar',
    image:
      'https://images.pexels.com/photos/6724373/pexels-photo-6724373.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=360&h=460',
  },
  {
    name: 'Spa dos pés',
    price: 'R$ 60',
    description: 'Remoção e limpeza de calosidades com cuidado e conforto.',
    category: 'Bem-estar',
    image:
      'https://images.pexels.com/photos/6663599/pexels-photo-6663599.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=360&h=460',
  },
  {
    name: 'Spa dos pés + pedicure',
    price: 'R$ 90',
    description: 'Spa dos pés com finalização de pedicure.',
    category: 'Bem-estar',
    image:
      'https://images.pexels.com/photos/17056222/pexels-photo-17056222/free-photo-of-close-up-of-woman-doing-pedicure.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=360&h=460',
  },
  {
    name: 'Spa dos pés + pedicure + manicure',
    price: 'R$ 120',
    description: 'Spa dos pés combinado com pedicure e manicure.',
    category: 'Bem-estar',
    image: redAlmond,
  },
  {
    name: 'Spa dos pés + escalda pés',
    price: 'R$ 140',
    description: 'Tratamento completo de bem-estar para os pés.',
    category: 'Bem-estar',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=360&h=460&q=82',
  },
  {
    name: 'Spa dos pés + escalda pés + pedicure',
    price: 'R$ 170',
    description: 'Spa, escalda pés e pedicure no mesmo atendimento.',
    category: 'Bem-estar',
    image:
      'https://images.pexels.com/photos/13059141/pexels-photo-13059141.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=360&h=460',
  },
  {
    name: 'Spa dos pés + escalda pés + pedicure + manicure',
    price: 'R$ 200',
    description: 'Experiência completa com spa, escalda, pés e mãos.',
    category: 'Bem-estar',
    image: blackAlmond,
  },
  {
    name: 'Adicional esmaltação em gel no spa',
    price: '+ R$ 20',
    description: 'Adicional para esmaltação em gel nos procedimentos de spa.',
    category: 'Bem-estar',
    image:
      'https://images.pexels.com/photos/17056222/pexels-photo-17056222/free-photo-of-close-up-of-woman-doing-pedicure.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=360&h=460',
  },
  {
    name: 'Decorações e reconstruções',
    price: 'Sob orçamento',
    description:
      'Joias, nail arts, encapsulado e reconstruções avaliadas no agendamento.',
    category: 'Alongamentos',
    image: wineElegance,
  },
]

const serviceGroups = [
  {
    title: 'Alongamentos e manutenção',
    description: 'Estrutura, manutenção e detalhes avaliados com cuidado.',
    category: 'Alongamentos' as const,
  },
  {
    title: 'Mãos e pés',
    description: 'Atendimentos tradicionais e em gel para uma finalização limpa.',
    category: 'Maos e pes' as const,
  },
  {
    title: 'Spa e bem-estar',
    description: 'Combinações relaxantes para pés, mãos e autocuidado.',
    category: 'Bem-estar' as const,
  },
]

const studioSteps = [
  'Tire suas dúvidas e compartilhe suas preferências pelo WhatsApp.',
  'Escolha o procedimento, modelo, cores e detalhes do acabamento.',
  'Confirme uma data e um horário disponíveis para o atendimento.',
  'Chegue no seu momento reservado e aproveite a experiência com calma.',
]

const studioNotes = [
  'Tolerância de até 15 minutos para atrasos.',
  'Caso queira levar acompanhante, confirme antes pelo WhatsApp.',
  'Joias, nail arts, encapsulados, pacotes e reconstruções são orçados no agendamento.',
]

const portfolioImages: PortfolioImage[] = [
  {
    src: redPinkGlitter,
    alt: 'Alongamento vermelho e rosa com glitter',
  },
  {
    src: silverFrench,
    alt: 'Alongamento claro com glitter prateado',
  },
  {
    src: whiteGold,
    alt: 'Unhas brancas com detalhes dourados',
  },
  {
    src: turquoiseMarble,
    alt: 'Unhas turquesa com arte marmorizada',
  },
  {
    src: blackAlmond,
    alt: 'Unhas pretas em formato amendoado',
  },
  {
    src: wineElegance,
    alt: 'Unhas vinho com acabamento elegante',
  },
]

function getSchedulingEmbedUrl(url: string) {
  if (!url) return ''
  const normalized = url.trim()

  try {
    const embedUrl = new URL(normalized)

    if (embedUrl.hostname.includes('cal.com')) {
      embedUrl.searchParams.set('embed', 'true')
    }

    if (embedUrl.hostname.includes('calendly.com')) {
      embedUrl.searchParams.set('hide_gdpr_banner', '1')
    }

    return embedUrl.toString()
  } catch {
    return normalized
  }
}

function App() {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    'Oi! Quero solicitar um agendamento.',
  )}`
  const embedUrl = getSchedulingEmbedUrl(schedulingUrl)
  const scheduleCardStyle = {
    '--schedule-image': `url(${redAlmond})`,
  } as CSSProperties

  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="studio-bar">
          <span>Yasmin Studio</span>
          <span>{business.city}</span>
        </div>
        <div className="hero-copy">
          <h1>{business.name}</h1>
          <p className="hero-subtitle">{business.subtitle}</p>
          <div className="trust-row">
            <span>
              <Star size={16} fill="currentColor" />
              {business.rating}
            </span>
            <span>
              <MapPin size={16} />
              {business.city}
            </span>
          </div>
          <div className="hero-actions">
            <a href="#agendar" className="primary-link">
              <CalendarCheck size={18} />
              Solicitar agendamento
            </a>
            <a href={whatsappUrl} className="secondary-link" target="_blank">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img
            src={profileMain}
            alt="Yasmin Nail Designer"
          />
        </div>
      </section>

      <section className="gallery-strip" aria-label="Galeria de trabalhos">
        <img
          src={redPinkGlitter}
          alt="Alongamento vermelho e rosa com glitter"
        />
        <img
          src={blueFrench}
          alt="Alongamento azul com francesinha decorada"
        />
        <img
          src={wineElegance}
          alt="Unhas vinho com acabamento elegante"
        />
      </section>

      <section className="about-section" id="sobre">
        <div className="about-intro">
          <img
            className="about-intro-image"
            src={profileSecondary}
            alt="Designer Yasmin em foto profissional"
          />
          <p className="eyebrow">sobre a designer</p>
          <h2>Luxo, beleza e sofisticação em cada detalhe</h2>
          <p>
            Sou especializada na criação de unhas em gel de luxo, com foco em
            design exclusivo, acabamento impecável e alto nível de sofisticação.
          </p>
          <p>
            Meu atendimento é pensado para mulheres que buscam unhas elegantes,
            modernas e ricamente decoradas, valorizando a estética das mãos como
            parte essencial da imagem pessoal.
          </p>
        </div>

        <div className="about-care">
          <div className="care-card care-card-feature">
            <Sparkles size={20} />
            <span>Como iremos trabalhar</span>
            <ol>
              {studioSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="care-card care-card-notes">
            <Heart size={20} />
            <span>Informações importantes</span>
            <ul>
              {studioNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <Scissors size={20} />
          <div>
            <p className="eyebrow">catalogo</p>
            <h2>Procedimentos com valores</h2>
          </div>
        </div>
        <div className="service-catalog">
          {serviceGroups.map((group) => (
            <section className="service-group" key={group.category}>
              <div className="service-group-heading">
                <div>
                  <span>{group.title}</span>
                  <p>{group.description}</p>
                </div>
                <a href="#agendar">Agendar</a>
              </div>
              <div className="service-list">
                {services
                  .filter((service) => service.category === group.category)
                  .map((service) => (
                    <article className="service-card" key={service.name}>
                      <img src={service.image} alt={service.name} />
                      <div className="service-card-copy">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                      </div>
                      <strong>{service.price}</strong>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="booking-section" id="agendar">
        <div className="booking-layout">
          <div className="booking-copy">
            <div className="booking-kicker">
              <Sparkles size={16} />
              <span>Agenda do estúdio</span>
            </div>
            <h2>Reserve com elegância</h2>
            <p>
              Reserve seu atendimento em poucos toques. O cuidado com formato,
              cor e acabamento começa antes de você chegar.
            </p>
            <div className="booking-concierge">
              <span>Como funciona</span>
              <ol>
                <li>Escolha o procedimento</li>
                <li>Selecione um horário disponível</li>
                <li>Finalize com seus dados</li>
              </ol>
            </div>
            <div className="booking-mini-card">
              <strong>Designer Yasmin</strong>
              <span>Atendimento reservado, acabamento delicado.</span>
            </div>
          </div>

          {embedUrl ? (
            <a
              href={schedulingUrl}
              target="_blank"
              className="schedule-booking-card"
              style={scheduleCardStyle}
            >
              <div className="schedule-card-top">
                <span>Agenda online</span>
                <CalendarCheck size={22} />
              </div>
              <div className="schedule-card-copy">
                <strong>Escolha seu horário</strong>
                <small>
                  Abra a agenda oficial, selecione o procedimento e reserve seu
                  momento com tranquilidade.
                </small>
              </div>
              <div className="schedule-card-bottom">
                <span>
                  <Sparkles size={16} />
                  Horários organizados
                </span>
                <em>
                  Abrir agenda
                  <ExternalLink size={18} />
                </em>
              </div>
            </a>
          ) : (
            <div className="setup-card">
              <Sparkles size={28} />
              <h3>Conecte sua agenda</h3>
              <p>
                Crie uma agenda no Cal.com ou Calendly, conecte seu calendario e
                cole o link em <code>VITE_SCHEDULING_URL</code>.
              </p>
              <ul>
                <li>Defina seus dias e horarios de atendimento</li>
                <li>Adicione uma pergunta para o procedimento desejado</li>
                <li>Conecte Google Calendar ou Outlook para evitar conflito</li>
              </ul>
              <a href="https://cal.com" target="_blank" className="primary-link">
                Criar agenda
                <ExternalLink size={17} />
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="contact-band">
        <div>
          <p className="eyebrow">duvidas</p>
          <h2>Prefere falar direto?</h2>
        </div>
        <a href={whatsappUrl} className="primary-link" target="_blank">
          <MessageCircle size={18} />
          Chamar no WhatsApp
        </a>
      </section>

      <section className="portfolio-section" aria-labelledby="portfolio-title">
        <div className="portfolio-heading">
          <p className="eyebrow">portfolio</p>
          <h2 id="portfolio-title">Alguns acabamentos para inspirar</h2>
        </div>
        <div className="portfolio-grid">
          {portfolioImages.map((image, index) => (
            <figure className="portfolio-item" key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <a
        href={whatsappUrl}
        className="floating-whatsapp"
        target="_blank"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle size={22} />
        <span>WhatsApp</span>
      </a>
    </main>
  )
}

export default App

