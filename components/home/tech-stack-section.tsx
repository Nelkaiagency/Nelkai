import { Workflow, Bot, Receipt, Mail } from "lucide-react"

const techStackItems = [
  {
    icon: Workflow,
    title: "Custom Workflow Infrastructure",
    description: "Integrated automation nodes powered by n8n backbone architecture for seamless business process automation.",
    size: "large",
  },
  {
    icon: Bot,
    title: "24/7 Multi-Channel AI Agents",
    description: "ManyChat + Claude API communication framework for always-on customer engagement.",
    size: "small",
  },
  {
    icon: Receipt,
    title: "Automated Financial & Invoicing Systems",
    description: "Wave API trigger pipelines for automated billing and financial operations.",
    size: "small",
  },
  {
    icon: Mail,
    title: "Smart Email Triage & Document Processing",
    description: "Vision API text categorization models for intelligent email sorting and document analysis.",
    size: "large",
  },
]

export function TechStackSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            The Tech Stack Matrix
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced, interconnected core engines Nelkai deploys to run businesses automatically.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {techStackItems.map((item, index) => {
            const Icon = item.icon
            const isLarge = item.size === "large"
            
            return (
              <div
                key={index}
                className={`group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 ${
                  isLarge ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-purple pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
