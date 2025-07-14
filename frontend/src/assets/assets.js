import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Richard James has been a trusted general physician for the past 4 years. He has extensive experience in diagnosing and managing common medical conditions like hypertension, diabetes, and respiratory issues. Dr. James is known for his patient-centric approach, providing personalized care and effective treatment plans. He has also handled numerous emergency cases, ensuring quick and accurate medical intervention. His expertise in preventive healthcare and lifestyle counseling has helped many patients maintain long-term health.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Emily Larson has been practicing as a skilled gynecologist for the past 3 years. She specializes in prenatal care, fertility treatments, and managing hormonal imbalances. Dr. Larson is known for her compassionate care, guiding patients through pregnancy and reproductive health challenges. She has successfully handled high-risk pregnancies and complex gynecological cases with precision and care. Her commitment to patient education and wellness has made her a trusted name among her patients.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sarah Patel is a dedicated dermatologist with 1 year of experience. She specializes in treating skin conditions such as acne, eczema, and psoriasis. Dr. Patel stays updated with the latest skincare treatments and techniques, ensuring her patients receive the best care. She is known for her detailed skin assessments and personalized treatment plans. Her approachable nature and attention to detail have earned her positive feedback from her patients.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher Lee has been a caring and attentive pediatrician for the past 2 years. He specializes in child healthcare, including growth monitoring, vaccinations, and treating common childhood illnesses. Dr. Lee is known for his gentle approach with children and clear communication with parents. He has experience handling both routine and emergency pediatric cases with confidence. His dedication to child health and well-being has made him a favorite among young patients and their families.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer Garcia has been a skilled neurologist for the past 4 years. She specializes in diagnosing and treating neurological disorders such as migraines, epilepsy, and multiple sclerosis. Dr. Garcia is known for her methodical approach and accurate diagnosis of complex cases. She has successfully managed both acute and chronic neurological conditions, providing personalized care to her patients. Her expertise in brain health and nervous system care has earned her the trust of her patients.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew Williams has been a dedicated neurologist for the past 4 years. He specializes in treating conditions like stroke, Parkinson’s disease, and neuropathy. Dr. Williams is known for his patient-focused care and precise diagnostic skills. He has successfully managed complex neurological cases and provided effective rehabilitation plans. His commitment to improving patients’ quality of life through innovative treatments has made him highly respected in his field.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Christopher Davis has been a trusted general physician for the past 4 years. He specializes in diagnosing and managing a wide range of medical conditions, including hypertension, diabetes, and respiratory issues. Dr. Davis is known for his thorough consultations and personalized treatment plans. He has experience handling both acute and chronic cases with precision and care. His patient-first approach and dedication to preventive healthcare have earned him the trust of his patients.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Timothy White has been a compassionate gynecologist for the past 3 years. He specializes in prenatal care, menstrual health, and fertility treatments. Dr. White is known for his calm demeanor and ability to make patients feel comfortable during consultations. He has successfully managed high-risk pregnancies and complex gynecological conditions. His focus on patient education and holistic care has made him a trusted healthcare provider.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Jeffrey King has been a caring pediatrician for the past 2 years. He specializes in child development, immunizations, and treating common childhood illnesses. Dr. King is known for his friendly approach, making children feel at ease during consultations. He has experience managing both routine checkups and pediatric emergencies. His dedication to child health and clear communication with parents have made him a trusted choice for families.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Zoe Kelly has been a skilled neurologist for the past 4 years. She specializes in treating conditions such as epilepsy, migraines, and multiple sclerosis. Dr. Kelly is known for her detailed diagnostic approach and patient-focused care. She has successfully handled complex neurological cases and provided effective long-term management plans. Her expertise in brain and nervous system health has earned her the trust of her patients.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patrick Harris has been a dedicated neurologist for the past 4 years. He specializes in treating neurological disorders such as Parkinson’s disease, stroke, and neuropathy. Dr. Harris is known for his analytical skills and compassionate approach to patient care. He has successfully managed both acute and chronic neurological conditions, providing tailored treatment plans. His commitment to improving patients’ neurological health has made him a trusted specialist.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chloe Evans has been a trusted general physician for the past 4 years. She specializes in managing common health issues like hypertension, diabetes, and respiratory infections. Dr. Evans is known for her thorough diagnostic approach and personalized care plans. She has experience handling both routine checkups and complex medical cases with confidence. Her patient-focused approach and commitment to preventive care have earned her the trust of her patients.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Martinez has been a skilled gynecologist for the past 3 years. He specializes in prenatal care, fertility treatments, and managing menstrual health issues. Dr. Martinez is known for his patient-focused approach and ability to make patients feel comfortable during consultations. He has successfully handled high-risk pregnancies and complex gynecological cases. His dedication to women’s health and well-being has earned him the trust of his patients.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Amelia Hill has been a dedicated dermatologist for the past 1 year. She specializes in treating skin conditions like acne, eczema, and dermatitis. Dr. Hill is known for her detailed skin assessments and personalized treatment plans. She stays updated with the latest skincare techniques to provide the best care to her patients. Her gentle approach and attention to detail have earned her positive feedback from her patients.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]