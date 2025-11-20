"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Settings, Trophy, MessageSquare, Award, HelpCircle, Newspaper, Car, Users, MapPin } from "lucide-react";

export default function F1TeamsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Teams", id: "about" },
            { name: "Cars", id: "feature" },
            { name: "Stats", id: "metric" },
            { name: "News", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="F1 Teams Hub"
          button={{
            text: "Watch Live",
            href: "https://f1tv.formula1.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Formula 1 Teams Hub"
          description="Experience the world of Formula 1 with comprehensive team profiles, cutting-edge car technology, and the latest from the paddock"
          tag="2025 Season"
          tagIcon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649913122-rz74ksjl.jpg"
          imageAlt="Formula 1 race car on track"
          buttons={[
            { text: "Explore Teams", href: "about" },
            { text: "Latest News", href: "blog" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="The pinnacle of motorsport brings together ten legendary teams, each pushing the boundaries of engineering excellence and racing innovation on the world's most challenging circuits"
          buttons={[
            { text: "Team Profiles", href: "https://www.formula1.com/en/teams.html" },
            { text: "View Cars", href: "feature" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="F1 Car Technology"
          description="Discover the advanced engineering and cutting-edge technology that powers Formula 1 cars"
          tag="Innovation"
          tagIcon={Settings}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Advanced Aerodynamics",
              description: "Complex front and rear wing designs generate up to 1,500kg of downforce at 300km/h, allowing cars to corner at incredible speeds while maintaining stability and grip",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649924610-mltgy5v0.jpg",
              imageAlt: "F1 car aerodynamic components"
            },
            {
              id: 2,
              title: "Hybrid Power Unit",
              description: "1.6L V6 turbo hybrid engines combined with ERS energy recovery systems deliver over 1,000 horsepower while achieving remarkable fuel efficiency under strict regulations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649925759-l7zo3kn8.jpg",
              imageAlt: "F1 hybrid power unit engine"
            },
            {
              id: 3,
              title: "Safety Innovation",
              description: "State-of-the-art safety features including the halo cockpit protection, carbon fiber survival cells, and HANS devices protect drivers at speeds exceeding 350km/h",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649927044-6uthsdfy.jpg",
              imageAlt: "F1 safety halo protection system"
            },
            {
              id: 4,
              title: "Tire Technology",
              description: "Sophisticated tire compounds designed for different weather and track conditions, with advanced thermal management systems to optimize grip and performance throughout races",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649927933-m5gyqdyb.jpg",
              imageAlt: "F1 racing tire technology"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="F1 Championship Stats"
          description="Key statistics from the current Formula 1 season and championship standings"
          tag="2025 Season"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              icon: Car,
              title: "Teams",
              value: "10"
            },
            {
              id: "2",
              icon: Users,
              title: "Drivers",
              value: "20"
            },
            {
              id: "3",
              icon: MapPin,
              title: "Races",
              value: "24"
            },
            {
              id: "4",
              icon: Zap,
              title: "Max Speed",
              value: "372km/h"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Driver Insights"
          description="What Formula 1 drivers and fans say about the sport"
          tag="Voices"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Lewis Hamilton",
              role: "7-time World Champion",
              testimonial: "Formula 1 is the ultimate test of man and machine. Every race pushes us to the absolute limit of what's possible in motorsport.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649932023-clnzxvdo.jpg",
              imageAlt: "Lewis Hamilton F1 driver"
            },
            {
              id: "2",
              name: "Max Verstappen",
              role: "3-time World Champion",
              testimonial: "The competition in F1 today is incredible. Every team is pushing boundaries and the technology we race with is simply mind-blowing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649933005-6lzuflem.jpg",
              imageAlt: "Max Verstappen F1 driver"
            },
            {
              id: "3",
              name: "Charles Leclerc",
              role: "Ferrari Driver",
              testimonial: "Racing for Ferrari in Formula 1 is a dream come true. The passion of the fans and the heritage of this sport is unmatched.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649933990-4l7krd7q.jpg",
              imageAlt: "Charles Leclerc F1 driver"
            },
            {
              id: "4",
              name: "Lando Norris",
              role: "McLaren Driver",
              testimonial: "F1 combines the latest technology with pure racing instinct. It's constantly evolving and that's what makes it so exciting.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649934957-mt7qxga3.jpg",
              imageAlt: "Lando Norris F1 driver"
            },
            {
              id: "5",
              name: "Sarah Mitchell",
              role: "F1 Fan since 1998",
              testimonial: "Following F1 teams has been my passion for decades. The engineering innovation and racing drama never gets old.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649936019-knxr1ph2.jpg",
              imageAlt: "F1 racing fan"
            },
            {
              id: "6",
              name: "Marcus Johnson",
              role: "Motorsport Enthusiast",
              testimonial: "The tactical side of F1 is fascinating. Strategy, pit stops, tire management - it's like chess at 300km/h.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649937686-6wcc0e1a.jpg",
              imageAlt: "F1 motorsport enthusiast"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Formula 1 Teams"
          description="The ten constructor teams competing in the 2025 Formula 1 World Championship"
          tag="Championship"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649916751-02pk8bly.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649917841-qkhrczv7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649919270-1cw37hhb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649920331-a995y4s7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649921336-o5j174ph.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649922728-i96xppxq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649923657-yfswfg61.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="F1 Teams FAQ"
          description="Common questions about Formula 1 teams, regulations, and championship format"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How many teams compete in Formula 1?",
              content: "There are 10 constructor teams in Formula 1, each fielding two cars for a total of 20 drivers on the grid. Each team represents a different constructor and must build their own chassis according to FIA regulations."
            },
            {
              id: "2",
              title: "What is the Constructor's Championship?",
              content: "The Constructor's Championship is awarded to the team that scores the most points throughout the season. Points are awarded based on both drivers' finishing positions, with the winning constructor receiving significant prize money and prestige."
            },
            {
              id: "3",
              title: "How do F1 teams develop their cars?",
              content: "Teams employ hundreds of engineers, aerodynamicists, and designers who use advanced CFD simulations, wind tunnels, and extensive testing to develop cars within strict technical regulations set by the FIA."
            },
            {
              id: "4",
              title: "What is the budget cap in Formula 1?",
              content: "Formula 1 introduced a budget cap of $135 million USD per team per season to promote competitive balance and financial sustainability across all teams, with certain exclusions for driver salaries and marketing costs."
            },
            {
              id: "5",
              title: "How are F1 teams funded?",
              content: "F1 teams are funded through various sources including sponsorship deals, prize money from championship standings, manufacturer backing, and private investment from team owners and shareholders."
            },
            {
              id: "6",
              title: "What makes each F1 team unique?",
              content: "Each team has its own unique philosophy, engineering approach, team culture, and history. Some are manufacturer-backed (like Ferrari and Mercedes), while others are independent constructors with their own distinct heritage and racing DNA."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest F1 News"
          description="Stay updated with the latest news, analysis, and insights from the world of Formula 1"
          tag="News"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="opacity"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              category: "Technology",
              title: "Advanced Telemetry Systems in F1",
              excerpt: "How teams use real-time data analysis to optimize car performance and race strategy during every session",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649928870-rag4k4jw.jpg",
              imageAlt: "F1 telemetry data analysis",
              authorName: "James Wilson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649936019-knxr1ph2.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Racing",
              title: "The Art of the Perfect Pit Stop",
              excerpt: "Inside the 2.3-second pit stops that can make or break a Formula 1 race weekend",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649929999-l80ec0yg.jpg",
              imageAlt: "F1 pit stop tire change",
              authorName: "Emma Rodriguez",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649937686-6wcc0e1a.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Analysis",
              title: "Qualifying Format Evolution",
              excerpt: "How the current Q1, Q2, Q3 format creates drama and determines grid positions for race day",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649930901-sjxrw39l.jpg",
              imageAlt: "F1 qualifying session",
              authorName: "Michael Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763649932023-clnzxvdo.jpg",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="F1 Teams Hub"
          copyrightText="© 2025 | F1 Teams Hub"
          columns={[
            {
              title: "Teams",
              items: [
                { label: "Mercedes AMG", href: "https://www.mercedesamgf1.com" },
                { label: "Red Bull Racing", href: "https://www.redbullracing.com" },
                { label: "Ferrari", href: "https://www.ferrari.com/en/formula1" },
                { label: "McLaren", href: "https://www.mclaren.com/racing" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Race Calendar", href: "https://www.formula1.com/en/racing/2025.html" },
                { label: "Regulations", href: "https://www.fia.com" },
                { label: "Live Timing", href: "https://www.formula1.com/en/f1-live.html" },
                { label: "Statistics", href: "metric" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Fan Zone", href: "https://www.formula1.com/en/latest.html" },
                { label: "News", href: "blog" },
                { label: "Contact", href: "contact" },
                { label: "About", href: "about" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}