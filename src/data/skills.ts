import { Brackets, Code2, Cpu, Database, Smartphone, Settings2 } from 'lucide-react'
import nestjs from '../assets/images/logos/nest.svg'
import jira from '../assets/images/logos/jira.webp'
import supabase from '../assets/images/logos/supabase.webp'

export const skillsData = [
    {
            icon: Code2,
            title: 'Langages',
            stacks: ['JavaScript', 'TypeScript', 'HTML', 'CSS','Java','Bash', 'SQL'],
            logos:[
                'https://img.icons8.com/color/48/javascript--v1.png',
                'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png',
                'https://img.icons8.com/color/48/html-5--v1.png',
                'https://img.icons8.com/fluency/48/css3.png',
                'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-java-is-a-general-purpose-programming-language-that-is-class-based-logo-color-tal-revivo.png',
                'https://images.icon-icons.com/2699/PNG/512/gnu_bash_official_logo_icon_169099.png',
                'https://img.icons8.com/external-those-icons-flat-those-icons/24/external-SQL-development-files-those-icons-flat-those-icons.png'
            ]
        },
        {
            icon: Brackets,
            title: 'Framework & Bilbiothèques',
            stacks: ['React', 'Vue.js', 'Node.js', 'Express', 'NestJS', 'Spring Boot','Tailwind CSS', 'Bootstrap 5'],
            logos:[
                'https://img.icons8.com/color/48/react-native.png',
                'https://img.icons8.com/color/48/vue-js.png',
                'https://img.icons8.com/color/48/nodejs.png',
                'https://img.icons8.com/ios/50/express-js.png',
                nestjs,
                'https://img.icons8.com/color/48/spring-logo.png',
                'https://img.icons8.com/color/48/tailwindcss.png',
                'https://img.icons8.com/color-glass/48/bootstrap.png'
            ]
        },
        {
            icon: Smartphone,
            title: 'Dévéloppement mobile',
            stacks: ['ReactNative', 'Flutter','Dart'],
            logos:[
                'https://img.icons8.com/color/48/react-native.png',
                'https://img.icons8.com/fluency/48/flutter.png',
                'https://img.icons8.com/color/48/dart.png'
            ]
        },
        {
            icon: Database,
            title: 'Base de données',
            stacks: ['PostgreSQL', 'MySQL', 'Redis','MongoDB'],
            logos:[
                'https://img.icons8.com/color/48/postgreesql.png',
                'https://img.icons8.com/color/48/mysql-logo.png',
                'https://img.icons8.com/color/48/redis--v1.png',
                'https://img.icons8.com/color/48/mongodb.png'
            ]
        },
        {
            icon: Settings2,
            title: 'Outils',
            stacks: ['Git', 'Github', 'Docker','Prisma','Sequelize', 'Supabase', 'Jira',],
            logos:[
                'https://img.icons8.com/color/48/git.png',
                'https://img.icons8.com/glyph-neue/64/github.png',
                'https://img.icons8.com/color/48/docker.png',
                'https://img.icons8.com/ios/50/prisma-orm.png',
                'https://raw.githubusercontent.com/sequelize/sequelize/60b75189751e534b6853a56513df3453feb045b1/logo.svg',
                supabase,
                jira
            ]
        },
        {
            icon: Cpu,
            title: 'Os',
            stacks: ['Ubuntu', 'Windows'],
            logos:[
                "https://img.icons8.com/color/48/ubuntu--v1.png",
                "https://img.icons8.com/fluency/48/windows-11.png"
            ]
        }
]