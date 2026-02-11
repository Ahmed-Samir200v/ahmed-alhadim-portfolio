import { useEffect } from 'react';
import { Link, useParams, useLocation } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getArticleBySlug, getRelatedArticles } from '@/data/blogData';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogArticle() {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const article = getArticleBySlug(params.slug || '');

  useEffect(() => {
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl mb-4 text-primary">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                <ArrowLeft size={18} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Cover Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container relative z-10">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="outline" className="mb-8 border-border hover:border-primary/50 font-heading">
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-heading font-semibold border border-primary/20">
                {article.category}
              </span>
              {article.featured && (
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-heading font-semibold border border-accent/20">
                  FEATURED
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-primary text-glow-amber leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground font-heading mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-accent pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg font-bold text-primary">
                  A
                </div>
                <span className="font-heading">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="ml-auto border-border hover:border-primary/50 font-heading"
              >
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Cover Image */}
            <div className="mb-12 rounded-lg overflow-hidden border border-border">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-heading text-lg mb-4 text-foreground">Tags:</h3>
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-muted-foreground font-accent hover:border-primary/50 transition-colors"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-card/30 border-t border-border">
          <div className="container">
            <h2 className="font-display text-4xl md:text-5xl mb-12 text-primary text-glow-amber text-center">
              RELATED ARTICLES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                  <Card className="group h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                    {/* Cover Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relatedArticle.coverImage}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      {/* Category */}
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-heading font-semibold border border-primary/20">
                        {relatedArticle.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground font-accent">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-primary text-glow-amber">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-lg text-muted-foreground font-heading mb-8">
              Interested in collaborating on VR/XR projects or discussing technical solutions?
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
