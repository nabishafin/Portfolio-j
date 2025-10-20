'use client'
import React from 'react'

const Routine =
  () => {
    return (
      <div className=' flex w-full justify-center mb-10'>
        <div className=' w-3/4 rounded-xl py-5'>
          <div className="bg-[#1D1E22] text-gray-200 rounded-xl overflow-hidden shadow-lg w-fullfont-mono">

            <div className="flex items-center gap-2 bg-[#2d2d2d] px-4 py-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="ml-4 text-xs text-gray-400">routine.js</span>
            </div>


            <div className="p-4 text-sm md:text-base">
              <p className="text-yellow-400">{"// JavaScript"}</p>
              <pre className="mt-2 leading-relaxed">
                <code>
                  <span className="text-blue-400">{"const "}</span>
                  <span className="text-green-400">{"Routine "}</span>
                  <span className="text-white">{"= () => {"}</span>{"\n"}
                  {"  "}
                  <span className="text-purple-400">console</span>
                  <span className="text-white">.log(</span>
                  <span className="text-amber-300">"Eat"</span>
                  <span className="text-white">);</span>{"\n"}
                  {"  "}
                  <span className="text-purple-400">console</span>
                  <span className="text-white">.log(</span>
                  <span className="text-amber-300">"Code"</span>
                  <span className="text-white">);</span>{"\n"}
                  {"  "}
                  <span className="text-purple-400">console</span>
                  <span className="text-white">.log(</span>
                  <span className="text-amber-300">"Sleep"</span>
                  <span className="text-white">);</span>{"\n"}
                  {"  "}
                  <span className="text-purple-400">console</span>
                  <span className="text-white">.log(</span>
                  <span className="text-amber-300">"Repeat()"</span>
                  <span className="text-white">);</span>{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>


        </div>
      </div>
    )
  }

export default Routine