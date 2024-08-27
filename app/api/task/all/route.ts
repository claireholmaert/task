// models
import Task from "@models/tasks";

// utils
import { connectToDB } from "@utils/db";
import { NextResponse } from "next/server";

// next

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const tasks = await Task.find({});

    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed", { status: 500 });
  }
};
