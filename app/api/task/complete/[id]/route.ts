// types
import { IDeleteTaskRequestParam } from "@types";

// utils
import { connectToDB } from "@utils/db";

// models
import Task from "@models/tasks";
import { NextResponse } from "next/server";

export const PATCH = async (
  req: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDB();
    const existingTask = await Task.findById(params.id);
    if (!existingTask) {
      return NextResponse.json("Task not found", { status: 404 });
    }
    existingTask.completed = true;
    await existingTask.save();
    return NextResponse.json("Task completed success", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error completing task", { status: 500 });
  }
};
