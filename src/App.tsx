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
import './App.css'

type Service = {
  name: string
  price: string
  description: string
}

type PortfolioImage = {
  src: string
  alt: string
}

const business = {
  name: import.meta.env.VITE_BUSINESS_NAME ?? 'Yasmin Nail Designer',
  subtitle:
    import.meta.env.VITE_BUSINESS_SUBTITLE ?? 'Alongamento • Gel • Nail Art',
  city: import.meta.env.VITE_BUSINESS_CITY ?? 'Uberlandia - MG',
  rating: import.meta.env.VITE_BUSINESS_RATING ?? '5,0',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER ?? '5534974001885',
}

const schedulingUrl =
  import.meta.env.VITE_SCHEDULING_URL ?? 'https://cal.com/marcos-nascimento-yvrlcn'

const services: Service[] = [
  {
    name: 'Alongamento',
    price: 'R$ 150',
    description: 'Estrutura completa, acabamento natural e maior durabilidade.',
  },
  {
    name: 'Manutencao',
    price: 'R$ 100',
    description: 'Reposicao, nivelamento e finalizacao para manter o brilho.',
  },
  {
    name: 'Banho de gel',
    price: 'R$ 80',
    description: 'Camada protetora para unhas mais resistentes e delicadas.',
  },
  {
    name: 'Esmaltacao em gel',
    price: 'R$ 50',
    description: 'Cor intensa, secagem rapida e acabamento duradouro.',
  },
]

const portfolioImages: PortfolioImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=700&q=84',
    alt: 'Unhas nude com acabamento delicado',
  },
  {
    src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=700&q=84',
    alt: 'Esmaltacao em gel com brilho',
  },
  {
    src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=84',
    alt: 'Nail art delicada em tons claros',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=84',
    alt: 'Unhas decoradas com acabamento elegante',
  },
  {
    src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=84',
    alt: 'Detalhe de manicure em processo',
  },
  {
    src: 'https://images.unsplash.com/photo-1599206676335-193c82b13c9e?auto=format&fit=crop&w=700&q=84',
    alt: 'Acabamento de unhas em tom sofisticado',
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

  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="studio-bar">
          <span>Yasmin Studio</span>
          <span>Beauty appointments</span>
          <span>{business.city}</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">studio de unhas</p>
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
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=82"
            alt="Unhas com manicure finalizada"
          />
          <div className="hero-stamp">
            <Heart size={18} fill="currentColor" />
            Atendimento com hora marcada
          </div>
        </div>
      </section>

      <section className="gallery-strip" aria-label="Galeria de trabalhos">
        <img
          src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=500&q=82"
          alt="Unhas claras com acabamento delicado"
        />
        <img
          src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=500&q=82"
          alt="Detalhe de esmalte em gel"
        />
        <img
          src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=500&q=82"
          alt="Nail art delicada"
        />
      </section>

      <section className="services-section">
        <div className="section-heading">
          <Scissors size={20} />
          <div>
            <p className="eyebrow">servicos</p>
            <h2>Escolha o atendimento ideal</h2>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-meta">
                <strong>{service.price}</strong>
                <a href="#agendar">Agendar</a>
              </div>
            </article>
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
              <strong>Designer de Unhas Yasmin</strong>
              <span>Atendimento reservado, acabamento delicado.</span>
            </div>
          </div>

          {embedUrl ? (
            <a href={schedulingUrl} target="_blank" className="schedule-booking-card">
              <div className="schedule-card-top">
                <span>Agenda online</span>
                <CalendarCheck size={22} />
              </div>
              <div className="schedule-card-copy">
                <strong>Escolha seu horário</strong>
                <small>
                  Abra a agenda, selecione o procedimento e reserve seu momento
                  com tranquilidade.
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
