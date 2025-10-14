 "use client"
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Coins, TrendingUp, Award, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GeometricBlob, Web3Network, BlockchainIllustration, CryptoCoin, AbstractPattern } from "@/components/VectorArt";
import Link from "next/link";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: "Learn Web3",
      description: "Master blockchain, DeFi, NFTs, and more through interactive courses"
    },
    {
      icon: Coins,
      title: "Earn XPs & Rewards",
      description: "Get rewarded with XP points and tokens for completing lessons"
    },
    {
      icon: TrendingUp,
      title: "Grow Your Skills",
      description: "Build real-world projects and advance your Web3 career"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Learners" },
    { number: "500+", label: "Courses Available" },
    { number: "1M+", label: "XPs Distributed" },
    { number: "50+", label: "Industry Partners" }
  ];
   
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 overflow-hidden relative">
    {/* Abstract Background Patterns */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AbstractPattern className="absolute top-0 left-0 w-full h-full opacity-30" />
      <motion.div
        className="absolute top-20 right-10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Web3Network className="w-48 h-48 opacity-20" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <BlockchainIllustration className="w-80 h-40 opacity-25" />
      </motion.div>
    </div>

    {/* Navigation */}
    <motion.nav 
      className="flex items-center justify-between p-6 relative z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center space-x-3">
        <CryptoCoin className="w-8 h-8" />
        <div className="text-2xl font-bold text-gray-800">ED3HUB</div>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="/home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-gray-600">
          <Link href={"/sign-up"}>
          Signup
          </Link>
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href={"/sign-in"}>
          Login
          </Link>
        </Button>
      </div>
    </motion.nav>

    {/* Hero Section */}
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-15 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-32 left-1/4"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GeometricBlob className="w-32 h-32 opacity-30" />
        </motion.div>
        <motion.div
          className="absolute top-64 right-1/4"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <CryptoCoin className="w-16 h-16 opacity-40" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="text-gray-800">Start Learning with</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              ED3HUB
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-600 mb-8 font-medium"
            variants={fadeInUp}
          >
            Earn, Learn, and Grow in Web3
          </motion.h2>

          <motion.p
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Join us today to unlock a new level of ease in managing your Web3 education. 
            Earn XPs and rewards while mastering blockchain technology.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group"
            >
              Start Learning Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Stats Section with Vector Art */}
    <motion.section
      className="py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {index === 0 && (
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <CryptoCoin className="w-12 h-12 opacity-30" />
                </motion.div>
              )}
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

    {/* Features Section */}
    <motion.section
      className="py-20 relative"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose ED3HUB?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of Web3 education with our innovative platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
                {/* Card background decoration */}
                {index === 1 && (
                  <div className="absolute top-4 right-4 opacity-10">
                    <Web3Network className="w-24 h-24" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute bottom-4 left-4 opacity-10">
                    <GeometricBlob className="w-20 h-20" />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

    {/* XP Rewards Section */}
    <motion.section
      className="py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-3xl"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Background vector art */}
          <div className="absolute top-4 left-4 opacity-20">
            <BlockchainIllustration className="w-32 h-16" />
          </div>
          <div className="absolute bottom-4 right-4 opacity-20">
            <CryptoCoin className="w-20 h-20" />
          </div>
          <motion.div
            className="absolute top-1/2 left-8 transform -translate-y-1/2"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <GeometricBlob className="w-16 h-16 opacity-20" />
          </motion.div>
          
          <div className="relative z-10">
            <div className="flex justify-center items-center mb-6">
              <Award className="h-12 w-12 text-yellow-400 mr-4" />
              <Star className="h-8 w-8 text-yellow-400 mr-2" />
              <Zap className="h-10 w-10 text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Earn While You Learn
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Complete courses, participate in challenges, and earn valuable XP points 
              that can be redeemed for rewards and NFTs
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Earning XPs
            </Button>
          </div>
        </div>
      </div>
    </motion.section>

    {/* CTA Section */}
    <motion.section
      className="py-20 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center relative">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Web3Network className="w-32 h-32 opacity-10" />
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Ready to Start Your Web3 Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of learners who are already earning, learning, and growing with ED3HUB
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg"
        >
          Get Started Today
        </Button>
      </div>
    </motion.section>

    {/* Footer */}
    <footer className="py-12 border-t border-gray-200 bg-white/50 backdrop-blur-sm relative">
      <div className="absolute top-0 left-0 w-full opacity-5">
        <AbstractPattern className="w-full h-32" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <CryptoCoin className="w-6 h-6" />
            <div className="text-2xl font-bold text-gray-800">
              ED3HUB
            </div>
          </div>
          <div className="flex items-center space-x-6 text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          © 2025 ED3HUB. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
  )
}
