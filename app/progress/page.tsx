"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    CheckCircle2,
    Circle,
    Trophy,
    Flame,
    BookOpen,
    Code2,
} from "lucide-react";
import { useRouter } from "next/navigation";


const progressData = [
    {
        title: "JavaScript Fundamentals",
        completed: 8,
        total: 12,
        topics: [
            { name: "Introduction to JavaScript", done: true },
            { name: "Execution Context", done: true },
            { name: "Global Execution Context", done: true },
            { name: "Function Execution Context", done: true },
            { name: "Call Stack", done: true },
            { name: "Hoisting", done: false },
            { name: "TDZ", done: false },
            { name: "var vs let vs const", done: false },
        ],
    },

    {
        title: "Scope & Functions",
        completed: 3,
        total: 10,
        topics: [
            { name: "Scope", done: true },
            { name: "Closures", done: true },
            { name: "Arrow Functions", done: true },
            { name: "Callbacks", done: false },
        ],
    },

    {
        title: "Advanced JavaScript",
        completed: 1,
        total: 15,
        topics: [
            { name: "Modules", done: true },
            { name: "Generators", done: false },
            { name: "Currying", done: false },
        ],
    },
];


export default function ProgressPage() {

    const router = useRouter();

    const totalCompleted =
        progressData.reduce(
            (acc, item) => acc + item.completed,
            0
        );


    const totalTopics =
        progressData.reduce(
            (acc, item) => acc + item.total,
            0
        );


    const percentage = Math.round(
        (totalCompleted / totalTopics) * 100
    );


    return (

        <div className="min-h-screen bg-[#0b0f14] text-[#d7dee7]">

            <div className="max-w-5xl mx-auto px-6 py-12">


                {/* Back */}

                <button
                    onClick={() => router.back()}
                    className="
          flex items-center gap-2
          text-sm font-mono
          text-[#7d8b9c]
          hover:text-[#e8b13a]
          transition
          "
                >
                    <ArrowLeft size={16} />
                    Back
                </button>



                {/* Header */}

                <div className="mt-8 mb-10">

                    <div className="
          flex items-center gap-3
          "
                    >

                        <Trophy
                            className="text-[#e8b13a]"
                            size={32}
                        />


                        <h1 className="
            text-4xl
            font-mono
            font-bold
            ">
                            Your Progress
                        </h1>

                    </div>


                    <p className="
          mt-3
          text-[#8b949e]
          ">
                        Track your JavaScript learning journey.
                    </p>

                </div>





                {/* Overall Progress */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
        rounded-xl
        border border-[#243042]
        bg-[#111823]
        p-6
        mb-10
        "
                >

                    <div className="
          flex justify-between
          items-center
          mb-4
          ">

                        <div className="flex gap-3 items-center">

                            <Flame
                                className="text-[#e5533c]"
                            />

                            <span>
                                Overall Progress
                            </span>

                        </div>


                        <span className="
            font-mono
            text-[#3ec988]
            ">
                            {percentage}%
                        </span>

                    </div>



                    <div className="
          h-3
          rounded-full
          bg-[#0b0f14]
          overflow-hidden
          ">

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{
                                width: `${percentage}%`
                            }}
                            transition={{
                                duration: 1
                            }}
                            className="
            h-full
            bg-[#3ec988]
            "
                        />

                    </div>


                    <p className="
          mt-3
          text-sm
          text-[#8b949e]
          ">
                        {totalCompleted} / {totalTopics} concepts completed
                    </p>


                </motion.div>







                {/* Categories */}


                <div className="space-y-8">


                    {
                        progressData.map((section, index) => (

                            <motion.div
                                key={section.title}
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    delay: index * 0.1
                                }}
                                className="
          rounded-xl
          border border-[#243042]
          bg-[#111823]
          p-6
          "
                            >


                                <div className="
            flex
            justify-between
            mb-5
            ">


                                    <div className="
              flex items-center gap-3
              ">

                                        <BookOpen
                                            size={20}
                                            className="text-[#e8b13a]"
                                        />

                                        <h2 className="
                text-xl
                font-semibold
                ">
                                            {section.title}
                                        </h2>

                                    </div>



                                    <span className="
              text-sm
              font-mono
              text-[#7d8b9c]
              ">
                                        {section.completed}/{section.total}
                                    </span>


                                </div>





                                <div className="space-y-3">


                                    {
                                        section.topics.map(topic => (

                                            <div
                                                key={topic.name}
                                                className="
              flex
              items-center
              gap-3
              text-sm
              "
                                            >

                                                {
                                                    topic.done ?

                                                        <CheckCircle2
                                                            size={18}
                                                            className="text-[#3ec988]"
                                                        />

                                                        :

                                                        <Circle
                                                            size={18}
                                                            className="text-[#7d8b9c]"
                                                        />

                                                }


                                                <span className={
                                                    topic.done
                                                        ?
                                                        "text-[#d7dee7]"
                                                        :
                                                        "text-[#7d8b9c]"
                                                }>
                                                    {topic.name}
                                                </span>


                                            </div>

                                        ))
                                    }


                                </div>


                            </motion.div>

                        ))
                    }


                </div>




            </div>

        </div>

    );
}