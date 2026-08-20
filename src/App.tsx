import { useEffect, useState } from "react"
import { TextAnimate } from "@/components/ui/text-animate"
import {
  motion,
  AnimatePresence,
} from "motion/react"
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"


type Page = "home" | "programs" | "plugins" | "ccs" | "discord"

const pageVariants = {
  initial: { opacity: 0, y: 16, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.45, 
      easing: [0.22, 1, 0.36, 1] 
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { 
      duration: 0.3, 
      easing: "easeIn" 
    },
  },
}


const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: "home", label: "Ana Sayfa" },
  { id: "programs", label: "Programlar" },
  { id: "plugins", label: "Pluginler" },
  { id: "ccs", label: "CC" },
  { id: "discord", label: "Discord" },
]

function Navbar({
  current,
  onNavigate,
}: {
  current: Page
  onNavigate: (p: Page) => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`
        fixed top-0 inset-x-0 z-50
        flex items-center justify-between
        px-6 h-16
        transition-all duration-300
        ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
        }
      `}
    >
      <button
        onClick={() => onNavigate("home")}
        className="flex items-center gap-2 group"
      >
        <div className="
          h-8 w-8 rounded-xl
          bg-gradient-to-br from-violet-500 to-indigo-500
          flex items-center justify-center
          text-white font-black text-sm
          transition-transform duration-300
          group-hover:rotate-6 group-hover:scale-110
        ">
          A
        </div>
        <span className="font-bold text-foreground tracking-tight">
          Argo<span className="text-accent">Studios</span>
        </span>
      </button>

      <div className="hidden sm:flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              relative px-4 py-1.5 rounded-full text-sm font-medium
              transition-all duration-200
              ${current === item.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
              }
            `}
          >
            {current === item.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative">{item.label}</span>
          </button>
        ))}
      </div>

      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="sm:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
        aria-label="Menü"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-5 bg-foreground rounded-full"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block h-0.5 w-5 bg-foreground rounded-full"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-5 bg-foreground rounded-full"
        />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="
              absolute top-full left-0 right-0
              bg-background/95 backdrop-blur-xl
              border-b border-white/5
              px-6 py-4
              flex flex-col gap-1
              sm:hidden
            "
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false) }}
                className={`
                  text-left px-4 py-2.5 rounded-xl text-sm font-medium
                  transition-colors duration-150
                  ${current === item.id
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

  function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
    return (
      <motion.div key="home" {...pageVariants} className="min-h-screen">

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
        >
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="
              mb-6 inline-flex rounded-full border border-white/10
              bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/70
            "
          >
            Hızlı • Sade • Modern
          </TextAnimate>

          <motion.h1
            className="
              text-5xl font-bold tracking-[-0.05em] text-white
              sm:text-6xl md:text-7xl
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
          >
            İhtiyacın olan yazılım,
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }}
          >
            tek yerde.
          </motion.h1>

          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }}
          >
            <button
              onClick={() => onNavigate("programs")}
              className="
                px-7 py-3 rounded-xl font-semibold text-sm
                bg-white text-black
                hover:bg-white/90 hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              Programlara Bak →
            </button>
            <button
              onClick={() => onNavigate("discord")}
              className="
                px-7 py-3 rounded-xl font-semibold text-sm
                bg-white text-black
                hover:bg-white/90 hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              Discord ↗
            </button>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}


const PROGRAMS = [
  { icon: "Ae", title: "After Effects 2026", version: "Adobe • Güncel sürüm", url: "https://bzzhr.to/uuiu8aol7zpz" },
  { icon: "Ae", title: "After Effects 2025.6", version: "Adobe • Önceki sürüm", url: "https://bzzhr.to/20s3e37me47a" },
  { icon: "Ae", title: "After Effects 2024.4", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/iptvfjz21gbu" },
  { icon: "Ae", title: "After Effects 2023", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/x06gw1phzxw6" },
  { icon: "Ae", title: "After Effects 2021", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/52qjr9v4mfo1" },
  { icon: "Pr", title: "Premiere Pro 2026", version: "Adobe • Güncel sürüm", url: "https://bzzhr.to/czgq15hqk56s" },
  { icon: "Pr", title: "Premiere Pro 2025.5", version: "Adobe • Güncel sürüm", url: "https://bzzhr.to/a9l6uqtmht30" },
  { icon: "Pr", title: "Premiere Pro 2024", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/03mweir8qock" },
  { icon: "St", title: "Speech to Text 2026", version: "Adobe • Güncel sürüm", url: "https://bzzhr.to/juiwlnb07ayk" },
  { icon: "St", title: "Speech to Text 2025", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/6f1j0p8iujgx" },
  { icon: "Me", title: "Media Encoder 2026", version: "Adobe • Güncel sürüm", url: "https://bzzhr.to/3pkudyhilc1j" },
  { icon: "Me", title: "Media Encoder 2025.6", version: "Adobe • Güncel sürüm", url: "https://bzzhr.to/ksm9fih746x1" },
  { icon: "Me", title: "Media Encoder 2024", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/crbx8in1fc2o" },
  { icon: "Me", title: "Media Encoder 2023", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/tri52an6t776" },
  { icon: "Me", title: "Media Encoder 2021", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/2rc8k4w6ceer" },
  { icon: "Me", title: "Media Encoder 2020", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/1utlttzeudap" },
  { icon: "Ps", title: "Photoshop 2026", version: "Adobe • Güncel sürüm", url: "https://bzzhr.to/aiij69viodlj" },
  { icon: "Ps", title: "Photoshop 2025", version: "Adobe • Güncel sürüm", url: "https://bzzhr.to/lgkxhiseo1af" },
  { icon: "Ps", title: "Photoshop 2024", version: "Adobe • Eski sürüm", url: "https://bzzhr.to/6bgkk54t858z" },
  { icon: "Tv", title: "Topaz Video Activator v2", version: "Topaz Labs • Permanently activated", url: "https://bzzhr.to/w3n37ltqd04f" },
  { icon: "Tp", title: "Topaz Photo Activator v2", version: "Topaz Labs • Permanently activated", url: "https://bzzhr.to/cvm4lytmtizx" },
  { icon: "Tg", title: "Topaz Gigapixel Activator v2", version: "Topaz Labs • Permanently activated", url: "https://bzzhr.to/rb3bz0ujoe2z" },
]

function ProgramsPage() {
  const [filter, setFilter] = useState<string>("Tümü")
  const categories = ["Tümü", "After Effects", "Premiere Pro", "Media Encoder", "Photoshop", "Speech to Text", "Topaz"]

  const filtered = filter === "Tümü"
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.title.toLowerCase().includes(filter.toLowerCase().split(" ")[0].toLowerCase()))

  return (
    <motion.div key="programs" {...pageVariants} className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-6xl">
        <TextAnimate
          animation="blurInUp"
          by="word"
          className="text-4xl font-bold md:text-5xl text-accent/80"
        >
          Popüler Programlar
        </TextAnimate>
        <p className="mt-4 max-w-xl text-muted-foreground">
          İhtiyacın olan yaratıcı araçlara hızlıca ulaş.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium border
                transition-all duration-200
                ${filter === cat
                  ? "bg-accent/15 border-accent/40 text-accent"
                  : "bg-white/3 border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {filtered.map((prog) => (
            <SoftwareCard key={prog.title} {...prog} delay={0} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}


const PLUGINS = [
  { icon: "Ae", title: "Sapphire Plugin", version: "Güncel Sürüm", url: "https://dosya.co/nm3rxo35v1xs/s4pph1r3.rar.html" },
  { icon: "Ae", title: "BCC Plugin", version: "Güncel Sürüm", url: "https://dosya.co/jfzcssuflcy9/BCC_(Adobe).rar.html" },
  { icon: "Ae", title: "Flow Plugin", version: "Güncel Sürüm", url: "https://dosya.co/b9urgfv0vl0x/Flow_v1.4.2.zip.html" },
  { icon: "Ae", title: "RSMB Plugin", version: "Güncel Sürüm", url: "https://dosya.co/5ayas91eegjn/RSMB_(Davinci_&_Vegas).zip.html" },
  { icon: "Ae", title: "Twitch Plugin", version: "Güncel Sürüm", url: "https://dosya.co/ap2s81776yvq/Twitch.zip.html" },
  { icon: "Ae", title: "Twixtor Plugin", version: "Güncel Sürüm", url: "https://dosya.co/fh47w33pvmrz/Twixtor.zip.html" },
]

function PluginsPage() {
  return (
    <motion.div key="plugins" {...pageVariants} className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-6xl">
        <TextAnimate
          animation="blurInUp"
          by="word"
          className="text-4xl font-bold md:text-5xl text-accent/80"
        >
          Popüler After Effect Pluginleri
        </TextAnimate>
        <p className="mt-4 max-w-xl text-muted-foreground">
          After Effects workflow'unu güçlendir.
        </p>

        <motion.div 
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {PLUGINS.map((plugin) => (
            <SoftwareCard key={plugin.title} {...plugin} delay={0} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

const CCS = [
  {
    icon: "CC",
    title: "Argo Main CC",
    version: "Argo Studios • Güncel Sürüm",
    url: "Yakında",
  },
]

function CCPage() {
  return (  
    <motion.div
      key="ccs"
      {...pageVariants}
      className="min-h-screen pt-24 pb-16 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <TextAnimate
          animation="blurInUp"
          by="word"
          className="text-4xl font-bold md:text-5xl text-accent/80"
        >
          Color Corrections
        </TextAnimate>

        <p className="mt-4 max-w-xl text-muted-foreground">
          Editlerin için hazırlanan renk ayarları ve CC paketleri.
        </p>

        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {CCS.map((cc) => (
            <SoftwareCard
              key={cc.title}
              {...cc}
              delay={0}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}


function DiscordPage() {
  return (
    <motion.div key="discord" {...pageVariants} className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-lg">
        <TextAnimate
          animation="blurInUp"
          by="word"
          className="text-4xl font-bold md:text-5xl text-accent/80 mb-4"
        >
          Discord Sunucumuz
        </TextAnimate>
        <p className="mb-10 text-muted-foreground">Topluluğa katıl, güncel kalsın.</p>

        <iframe
          src="https://discord.com/widget?id=1537188898936066118&theme=dark"
          width="100%"
          height="500"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="rounded-2xl border border-white/10 shadow-2xl"
        />

        <motion.a
          href="https://discord.gg/NhXvKckdmN"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6 flex w-full items-center justify-center rounded-xl
            bg-accent/5 px-4 py-3 text-sm font-bold text-accent
            transition-all duration-300 hover:bg-accent/10 hover:-translate-y-0.5
          "
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Discord Sunucusuna Katıl ↗
        </motion.a>
      </div>
    </motion.div>
  )
}


function SoftwareCard({
  icon,
  title,
  version,
  delay: _delay,
  url,
}: {
  icon: string
  title: string
  version: string
  delay: number
  url: string
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
      whileHover={{ scale: 1.02, y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      whileTap={{ scale: 0.98 }}
      className="
        group relative overflow-hidden rounded-3xl border border-card/20
        bg-card/5 p-6 backdrop-blur-lg transition-all duration-300
        hover:border-accent/30 hover:bg-card/10
        hover:shadow-lg hover:shadow-accent/10
      "
    >
      <div className="
        absolute -right-20 -top-20 h-40 w-40 rounded-full
        bg-accent/5 blur-3xl transition-all duration-700
        group-hover:scale-150 group-hover:bg-accent/10
      " />

      <div className="
        relative grid h-14 w-14 place-items-center rounded-2xl border
        border-accent/20 bg-accent/5 text-xl font-black text-accent
        transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110
      ">
        {icon}
      </div>

      <h3 className="relative mt-6 text-xl font-bold text-foreground">{title}</h3>
      <p className="relative mt-2 text-sm text-muted-foreground">{version}</p>

      <motion.a
        href={url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative mt-7 flex w-full items-center justify-center rounded-xl
          bg-accent/5 px-4 py-3 text-sm font-bold text-accent
          transition-all duration-300 hover:bg-accent/10
        "
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Resmi sayfaya git ↗
      </motion.a>
    </motion.article>
  )
}


function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        
        {/* Discord Profil */}
        <a
          href="https://discord.com/users/709426260497137785"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex items-center gap-4 rounded-2xl
            border border-white/10
            bg-white/[0.03]
            px-5 py-4
            transition-all duration-300
            hover:-translate-y-1
            hover:border-white/20
            hover:bg-white/[0.06]
          "
        >
          <img
            src="https://i.pinimg.com/1200x/31/a5/27/31a5279811c56a9d3da2c517036c4d82.jpg"
            alt="0akh"
            className="
              h-12 w-12 rounded-full object-cover
              ring-2 ring-white/10
              transition-all duration-300
              group-hover:ring-white/20
              group-hover:scale-105
            "
          />

          <div className="text-left">
            <p className="text-sm font-semibold text-white">
              ! sudo apt install discrd
            </p>
            <p className="text-xs text-white/40">
              Discord • 0akh
            </p>
          </div>

          <span className="
            ml-3 text-lg text-white/30
            transition-all duration-300
            group-hover:translate-x-1
            group-hover:text-white
          ">
            ↗
          </span>
        </a>

        {/* Yapımcı */}
        <div className="mt-2">
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="
              text-3xl font-black
              tracking-[-0.05em]
              text-white/20
              sm:text-4xl
            "
          >
            Yapımcı: 0akh
          </TextAnimate>
        </div>

        {/* Alt bilgi */}
        <div className="flex flex-col items-center gap-2 text-xs text-white/30">
          <p>© 2026 DownloadHub</p>
          <p>Hızlı • Sade • Modern</p>
        </div>

      </div>
    </footer>
  )
}

function App() {
  const [page, setPage] = useState<Page>("home")

  const navigate = (p: Page) => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setPage(p)
  }

  return (
    <StarsBackground
      starColor="#ffffff"
      speed={60}
      factor={0.035}
      className="relative min-h-screen overflow-x-hidden bg-[#050505] text-foreground"
    >
      <Navbar current={page} onNavigate={navigate} />

      <AnimatePresence mode="wait">
        {page === "home" && <HomePage key="home" onNavigate={navigate} />}
        {page === "programs" && <ProgramsPage key="programs" />}
        {page === "plugins" && <PluginsPage key="plugins" />}
        {page === "ccs" && <CCPage key="ccs" />}
        {page === "discord" && <DiscordPage key="discord" />}
      </AnimatePresence>

      <Footer />
    </StarsBackground>
  )
}
export default App
