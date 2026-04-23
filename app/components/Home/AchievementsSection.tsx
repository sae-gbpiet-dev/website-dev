import React from 'react'

const achievementDiamonds = [
  { color: 'bg-brand-gold', size: 'h-20 w-20', label: '' },
  { color: 'bg-brand-blue', size: 'h-24 w-24', label: '' },
  { color: 'bg-brand-gold', size: 'h-28 w-28', label: '' },
  { color: 'bg-brand-blue', size: 'h-32 w-32', label: '1st' },
  { color: 'bg-brand-gold', size: 'h-28 w-28', label: '' },
  { color: 'bg-brand-blue', size: 'h-24 w-24', label: '' },
  { color: 'bg-brand-gold', size: 'h-20 w-20', label: '' },
]

function AchievementsSection() {
  return (
    <section className='mx-auto flex max-w-7xl flex-col items-center gap-10 py-12 sm:gap-12 sm:py-16'>
      <div className='w-full'>
        <h1 className='text-center font-heading text-2xl text-white sm:text-3xl'>
          OUR ACHIEVEMENTS
        </h1>
      </div>

      <div className='relative w-full overflow-hidden py-8 lg:hidden'>
        <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent' />
        <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent' />

        <div className='achievements-mobile-track flex w-max items-center'>
          {[0, 1].map((groupIndex) => (
            <div
              aria-hidden={groupIndex === 1}
              className='flex items-center gap-8 pr-8'
              key={groupIndex}
            >
              {achievementDiamonds.map((diamond, index) => (
                <div
                  className='flex h-40 w-40 shrink-0 items-center justify-center'
                  key={`${diamond.color}-${diamond.size}-${index}`}
                >
                  <div
                    className={`h-28 w-28 ${diamond.color} flex rotate-45 items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-500 hover:rotate-90 hover:scale-110`}
                  >
                    {diamond.label ? (
                      <h1 className='-rotate-45 font-heading text-xl text-white'>
                        {diamond.label}
                      </h1>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='hidden w-full max-w-5xl grid-cols-7 place-items-center gap-6 lg:grid'>
        <div className='h-36 w-36 rotate-45 bg-brand-gold transition-all duration-500 hover:z-10 hover:rotate-90 hover:scale-150' />
        <div className='h-40 w-40 rotate-45 bg-brand-blue transition-all duration-500 hover:z-10 hover:rotate-90 hover:scale-150' />
        <div className='h-44 w-44 rotate-45 bg-brand-gold transition-all duration-500 hover:z-10 hover:rotate-90 hover:scale-150' />
        <div className='flex h-48 w-48 rotate-45 cursor-pointer items-center justify-center bg-brand-blue transition-all duration-500 hover:rotate-90 hover:scale-110'>
          <h1 className='-rotate-45 font-heading text-2xl text-white hover:rotate-90'>
            1st
          </h1>
        </div>
        <div className='h-44 w-44 rotate-45 bg-brand-gold transition-all duration-500 hover:z-10 hover:rotate-90 hover:scale-150' />
        <div className='h-40 w-40 rotate-45 bg-brand-blue transition-all duration-500 hover:z-10 hover:rotate-90 hover:scale-150' />
        <div className='h-36 w-36 rotate-45 bg-brand-gold transition-all duration-500 hover:z-10 hover:rotate-90 hover:scale-150' />
      </div>
    </section>
  )
}

export default AchievementsSection
