'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import Navbar from '../components/navbar'

interface FormData {
	name: string
	email: string
	phone: string
	subject: string
	message: string
}

export default function ContactForm() {
	const [isLoading, setIsLoading] = useState(false)
	const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>(
		'idle'
	)
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		setFormStatus('idle')

		try {
			await sendEmail(formData)
			setFormStatus('success')
			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: ''
			})
		} catch (error) {
			setFormStatus('error')
		} finally {
			setIsLoading(false)
		}
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl'>
			<h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>
				Contact Us
			</h2>

			<form onSubmit={handleSubmit} className='space-y-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{/* Name Field */}
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200'
						/>
					</div>

					{/* Email Field */}
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
							className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200'
						/>
					</div>
				</div>

				{/* Phone Field */}
				<div>
					<label
						htmlFor='phone'
						className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
						Phone Number
					</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
						className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200'
					/>
				</div>

				{/* Subject Field */}
				<div>
					<label
						htmlFor='subject'
						className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
						Subject
					</label>
					<input
						type='text'
						id='subject'
						name='subject'
						value={formData.subject}
						onChange={handleChange}
						required
						className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200'
					/>
				</div>

				{/* Message Field */}
				<div>
					<label
						htmlFor='message'
						className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						required
						rows={5}
						className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200 resize-none'
					/>
				</div>

				{/* Status Messages */}
				{formStatus === 'success' && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						className='p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded-lg'>
						Your message has been sent successfully! We'll get back to you soon.
					</motion.div>
				)}

				{formStatus === 'error' && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						className='p-4 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 rounded-lg'>
						There was an error sending your message. Please try again later.
					</motion.div>
				)}

				{/* Submit Button */}
				<button
					type='submit'
					disabled={isLoading}
					className='w-full px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
					{isLoading ? (
						<>
							<Loader2 className='animate-spin size-5' />
							<span>Sending...</span>
						</>
					) : (
						<>
							<Send className='size-5' />
							<span>Send Message</span>
						</>
					)}
				</button>
			</form>
		</motion.div>
	)
}

const sendEmail = async (formData: FormData) => {
	const response = await fetch('/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	})

	if (!response.ok) {
		const error = await response.json()
		throw new Error(error.details || 'Failed to send email')
	}

	return response.json()
}
