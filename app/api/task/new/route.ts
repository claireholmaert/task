// models
import Task from "@models/tasks";

// utils
import { connectToDB } from "@utils/db";

// next
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { task } = await req.json();

  try {
    await connectToDB();
    const newTask = new Task({ task });

    await newTask.save();

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed", { status: 500 });
  }
};
