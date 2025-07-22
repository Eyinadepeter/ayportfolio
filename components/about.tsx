"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Lightbulb,
  Rocket,
  BookOpen,
  RadioTower,
  TvMinimalPlay,
} from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">
              Video Editor / MCR Operator / Social Media Manager
            </h3>
            <p className="text-muted-foreground mb-6">
              I’m a versatile digital media professional with a passion for
              storytelling, precision broadcasting, and online engagement. With
              experience in video editing, live control room operations, and
              managing dynamic social media strategies, I bring creative vision
              and technical execution together to deliver powerful visual
              content across platforms.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether I’m cutting footage, switching live feeds, or driving
              audience interaction, I focus on quality, consistency, and impact
              at every stage of the media pipeline.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Visual Storyteller
                      </h4>
                      <p className="text-muted-foreground">
                        I craft compelling visual narratives through expert
                        video editing, transforming raw footage into polished
                        content that resonates with audiences. With a keen eye
                        for detail and rhythm, I use tools like Adobe Premiere
                        Pro and After Effects to enhance storytelling and
                        maintain high production quality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <RadioTower className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Broadcast Technician
                      </h4>
                      <p className="text-muted-foreground">
                        In the Master Control Room, I ensure smooth,
                        uninterrupted media delivery by monitoring live feeds,
                        switching sources, and troubleshooting technical issues
                        in real time. My focus is on maintaining signal
                        integrity, broadcast compliance, and seamless
                        transitions under pressure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <TvMinimalPlay className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Digital Strategist
                      </h4>
                      <p className="text-muted-foreground">
                        I develop and manage social media strategies that drive
                        engagement, grow communities, and amplify brand
                        visibility. From planning content calendars to analyzing
                        performance metrics, I align digital campaigns with
                        audience behavior and platform trends to maximize reach
                        and impact.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
