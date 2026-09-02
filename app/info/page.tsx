import React from 'react'
import PageHeader from '../components/PageHeader'

function page() {
  const aboutParagraphs = [
    "We're a student engineering team at GBPIET, and honestly, we spend more time in the workshop than we probably should.",
    "SAE GBPIET started because a group of students wanted to stop just studying engineering and start actually doing it. You can only learn so much from a textbook before you need to pick up a wrench, weld something crooked, take it apart, and try again. So that's what we do - we design, fabricate, test, and race real vehicles, and we learn most of what matters by getting it wrong a few times first.",
    "Right now, that means three teams working on three very different problems. Team Savitar Racing builds off-road ATVs from scratch for the SAE BAJA competition - the kind of project where \"back to the drawing board\" happens more than once a season. Team Antigravity works on UAVs, spending a lot of time figuring out how to make things fly, and just as much time figuring out why they didn't. And Team Media makes sure none of this chaos goes undocumented, turning late-night fabrication sessions and competition weekends into stories worth telling.",
    "None of this happens alone. It's students showing up on weekends, disagreeing about design choices, staying up too late before deadlines, and somehow still rolling a working vehicle onto the track when it counts. Along the way, people who started out just holding a wrench end up leading a subsystem - that's less a happy accident and more just how the team works.",
    "We've picked up a fair share of results over the years - national rankings, event wins, and in 2025, we became the first team from Northern India to build a 4WD Electric ATV. But if you ask us what we're actually proud of, it's less about the trophies and more about the students who walked in not knowing how to use a lathe and walked out running a project.",
    "If you're the kind of person who'd rather build something real than just talk about it, there's a place for you here.",
  ];

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 py-20'>
        <PageHeader title='ABOUT US' />

        <div className='mt-10 flex w-full max-w-4xl flex-col gap-5 text-base leading-8 text-neutral-700 md:text-lg md:leading-9'>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

    </div>
  )
}

export default page
