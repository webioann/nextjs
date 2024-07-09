import connect from "../../../../lib/connect";
import User from '../../../../models/UserSchema'
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    //Check if the user Already exists in the db
    await connect();
    const user = await User.findOne({ email }) 
    // const passwordsMatch = await bcrypt.compare(password, user.password)
    if (user) {
      return NextResponse.json({ message: `User with this email ( ${email})  already exists in the Database` }, { status: 500 });
    }
    if(!user) {
      const hashedPassword = await bcrypt.hash(password, 10)
      await User.create({ name, email, password: hashedPassword });
      return NextResponse.json({ message: "User Created Successfully" }, { status: 201 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, message: "Server Error: Something went wrong" }, { status: 500 });
  }
}
// export async function GET(request) {
//   try {
//     const users = await User.find({
//     });
//     return NextResponse.json(users);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to Fetch Users",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }