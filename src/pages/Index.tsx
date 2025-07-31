import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const addOns = [
    {
      title: "Mail Merge Toolkit",
      description: "Professional and smart personalized mass mailing from Outlook",
      image: "/img/b0e6ba0a-2d7d-4b4d-ba9f-ecfad0424437.jpg",
      features: ["Mass Personalization", "Smart Templates", "Advanced Scheduling"]
    },
    {
      title: "Duplicate Email Remover",
      description: "No more duplicates in Outlook folders",
      image: "/img/b0e6ba0a-2d7d-4b4d-ba9f-ecfad0424437.jpg",
      features: ["Smart Detection", "Bulk Processing", "Safe Removal"]
    },
    {
      title: "Print Tools for Outlook",
      description: "Enhanced printing capabilities for emails and attachments",
      image: "/img/b0e6ba0a-2d7d-4b4d-ba9f-ecfad0424437.jpg",
      features: ["Batch Printing", "Custom Layouts", "PDF Export"]
    },
    {
      title: "Outlook Toolbox",
      description: "Complete toolkit for Outlook power users",
      image: "/img/b0e6ba0a-2d7d-4b4d-ba9f-ecfad0424437.jpg",
      features: ["Multiple Tools", "Automation", "Time Saving"]
    },
    {
      title: "Attachments Processor",
      description: "Advanced attachment management and processing",
      image: "/img/b0e6ba0a-2d7d-4b4d-ba9f-ecfad0424437.jpg",
      features: ["Bulk Operations", "Auto Processing", "File Management"]
    },
    {
      title: "Add Contacts",
      description: "Streamlined contact management for Outlook",
      image: "/img/b0e6ba0a-2d7d-4b4d-ba9f-ecfad0424437.jpg",
      features: ["Import Contacts", "Sync Options", "Deduplication"]
    }
  ];

  const exchangeTools = [
    {
      title: "Attachment Save for Exchange",
      description: "Manage messages and attachments directly on Exchange Server",
      icon: "Database"
    },
    {
      title: "Printing Tool for Exchange",
      description: "Server-side printing solutions for Exchange environments",
      icon: "Printer"
    },
    {
      title: "Search for Exchange",
      description: "Advanced search capabilities across Exchange Server",
      icon: "Search"
    },
    {
      title: "POP3 Connector",
      description: "Bridge POP3 accounts with Exchange Server infrastructure",
      icon: "Link"
    }
  ];

  const clients = [
    { name: "Procter & Gamble", logo: "/img/d78011ed-08eb-4a0a-a66e-135322b96b14.jpg" },
    { name: "HIPP", logo: "/img/d78011ed-08eb-4a0a-a66e-135322b96b14.jpg" },
    { name: "AkzoNobel", logo: "/img/d78011ed-08eb-4a0a-a66e-135322b96b14.jpg" },
    { name: "Parmalat", logo: "/img/d78011ed-08eb-4a0a-a66e-135322b96b14.jpg" },
    { name: "ABB", logo: "/img/d78011ed-08eb-4a0a-a66e-135322b96b14.jpg" }
  ];

  return (
    <div className="min-h-screen bg-background font-segoe">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Icon name="Mail" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Microsoft Solutions</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Products</a>
              <a href="#exchange" className="text-muted-foreground hover:text-primary transition-colors">Exchange</a>
              <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">Clients</a>
              <a href="#news" className="text-muted-foreground hover:text-primary transition-colors">News</a>
            </nav>
            <Button className="hidden md:flex">
              Contact Sales
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Top-rated add-ins for
              <span className="text-primary block">Microsoft Outlook</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional tools and solutions that enhance your Outlook experience and boost productivity across your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="Download" size={20} className="mr-2" />
                Try Free Demo
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outlook Add-ins Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Microsoft Outlook Add-ins
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your Outlook with powerful tools designed for professional email management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img 
                      src={addon.image} 
                      alt={addon.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <CardTitle className="text-center text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors">
                    {addon.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4 text-muted-foreground">
                    {addon.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {addon.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Server Section */}
      <section id="exchange" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Essential solutions for Microsoft Exchange Server
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Server-side tools for enterprise email management and administration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exchangeTools.map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group bg-white border-2 hover:border-primary/20">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={tool.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {tool.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-16 border-t border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Our valued customers
            </h2>
            <p className="text-muted-foreground">
              Trusted by Fortune 500 companies worldwide
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/News/Reviews Section */}
      <section id="news" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog */}
            <Card className="hover:shadow-lg transition-shadow">
              <div className="border-t-4 border-primary rounded-t-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-muted-foreground">Blog</CardTitle>
                    <Icon name="Edit" size={24} className="text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h6 className="font-semibold text-primary mb-2">Latest</h6>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-bold">Throttle and delay email campaigns</span> - Control the number of outgoing messages during a specified period. Set limits, pauses, and schedules.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold text-primary mb-2">Most popular</h6>
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-bold">Advanced filtering techniques</span> - Master email organization with powerful filtering rules.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      View more posts
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* News */}
            <Card className="hover:shadow-lg transition-shadow">
              <div className="border-t-4 border-yellow-500 rounded-t-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-muted-foreground">News</CardTitle>
                    <Icon name="Newspaper" size={24} className="text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h6 className="font-semibold text-yellow-600 mb-2">06.07.2024</h6>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-bold">New Outlook 365 compatibility</span> - All our add-ins now fully support the latest Outlook 365 features and security updates.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold text-yellow-600 mb-2">05.06.2024</h6>
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-bold">Performance improvements</span> - Up to 40% faster processing speeds across all tools.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-yellow-600">
                      News archive
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Reviews */}
            <Card className="hover:shadow-lg transition-shadow">
              <div className="border-t-4 border-green-500 rounded-t-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-muted-foreground">Users saying</CardTitle>
                    <Icon name="MessageSquareQuote" size={24} className="text-green-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h6 className="font-semibold text-green-600 mb-2">Attachments Processor</h6>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-bold">"Game-changing efficiency"</span> - This tool saved us hours of manual work. The bulk processing feature is incredible.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-bold">"Professional grade solution"</span> - Perfect for enterprise environments.
                    </p>
                    <p className="text-xs text-muted-foreground font-semibold">- Fultzjap</p>
                    <p className="text-xs text-green-600 font-semibold">Empiric Systems</p>
                    <Button variant="link" className="p-0 h-auto text-green-600">
                      Read more reviews
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">Microsoft Solutions</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Professional Outlook add-ins and Exchange Server solutions for enterprise productivity.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Outlook Add-ins</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Exchange Tools</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Enterprise Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Downloads</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Microsoft Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}