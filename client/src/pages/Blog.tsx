import { useState } from 'react';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogArticles, getAllCategories, getArticlesByCategory } from '@/data/blogData';
import { Calendar, Clock, Search, Tag, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = getAllCategories();
  
  // Filter articles by category and search query
  const filteredArticles = getArticlesByCategory(selectedCategory).filter(article => {
    const searchLower = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.excerpt.toLowerCase().includes(searchLower) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container">
          <Link href="/">
            <Button variant="outline" className="mb-8 border-border hover:border-primary/50 font-heading">
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        {/* Decorative Cube Icons */}
        <div className="absolute top-20 right-20 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-110 hover:rotate-[45deg]" style={{animationDelay: '0.5s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-32 transition-transform duration-700" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-110 hover:rotate-[-45deg]" style={{animationDelay: '1.5s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-36 transition-transform duration-700" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-6xl md:text-7xl mb-6 text-primary text-glow-amber">
              TECHNICAL BLOG
            </h1>
            <p className="text-xl text-muted-foreground font-heading mb-8">
              Insights, tutorials, and best practices from 6+ years of VR/XR development and 3D art production
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-border focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border bg-card/20">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`font-heading ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 relative overflow-hidden">
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground font-heading">
                No articles found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <Card className="group h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                    {/* Cover Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {article.featured && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-semibold">
                          FEATURED
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Category Badge */}
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-heading font-semibold border border-primary/20">
                          {article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-accent pt-2 border-t border-border">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-accent">
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/30 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-primary text-glow-amber">
              WANT TO COLLABORATE?
            </h2>
            <p className="text-lg text-muted-foreground font-heading mb-8">
              I'm always interested in discussing VR/XR projects, technical challenges, and innovative solutions.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
