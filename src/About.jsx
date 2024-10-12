import React from 'react'
import SkillCard from './SkillCard'

function About() {
  return (
    <div className='p-5'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut rerum, qui illo sapiente molestiae quas facilis laborum temporibus ipsa iusto porro delectus inventore cumque minima perferendis maiores non! Iure.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae et harum quo, neque dicta alias ab quae eos, laboriosam quasi iusto soluta velit? Cupiditate sed tenetur minima fuga temporibus voluptatum libero rerum, mollitia aut atque fugit voluptatem nobis corporis accusamus? Accusantium, quasi nostrum blanditiis quisquam placeat, maiores harum in cum, doloribus odio dolorum reprehenderit?</p>
        <h2 className='font-bold text-4xl pt-5'>What I'm doing</h2>
        <div className='grid grid-cols-2 gap-5 pt-5'>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            <SkillCard></SkillCard>
            
        </div>

    </div>
  )
}

export default About