import { useForm, SubmitHandler } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// install useform, zod and @hookform/resolvers library before using this code
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type formData = z.infer<typeof schema>

function LoginComp() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formData>({
    defaultValues: {
      email: 'ex@123',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<formData> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)
      //   throw new Error()
      reset()
    } catch (error) {
      setError('root', {
        message: 'this mail is already taken',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type="text" placeholder="Email" />
      <br />
      {errors.email && <div>{errors.email?.message}</div>}
      <input {...register('password')} type="password" placeholder="Password" />
      <br />
      {errors.password && <div>{errors.password?.message}</div>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Submiting...' : 'Submit'}
      </button>
      {errors.root && <div>{errors.root?.message}</div>}
    </form>
  )
}

export default LoginComp

// // without usinng zod library
// import { useForm, SubmitHandler } from 'react-hook-form'

// type formData = {
//   email: String
//   password: string
// }

// function LoginComp() {
//   const {
//     register,
//     handleSubmit,
//     setError,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<formData>({
//     defaultValues: {
//       email: 'ex@123',
//     },
//   })

//   const onSubmit: SubmitHandler<formData> = async (data) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000))
//       console.log(data)
//       //   throw new Error()
//       reset()
//     } catch (error) {
//       setError('root', {
//         message: 'this mail is already taken',
//       })
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register('email', {
//           required: 'require input',
//           validate: (value) => {
//             if (!value.includes('@')) {
//               return '@ required'
//             } else return true
//           },
//         })}
//         type="text"
//         placeholder="Email"
//       />
//       <br />
//       {errors.email && <div>{errors.email?.message}</div>}
//       <input
//         {...register('password', {
//           required: 'require input',
//           minLength: {
//             value: 8,
//             message: '8 charactors required',
//           },
//         })}
//         type="password"
//         placeholder="Password"
//       />
//       <br />
//       {errors.password && <div>{errors.password?.message}</div>}
//       <button disabled={isSubmitting} type="submit">
//         {isSubmitting ? 'Submiting...' : 'Submit'}
//       </button>
//       {errors.root && <div>{errors.root?.message}</div>}
//     </form>
//   )
// }

// export default LoginComp
