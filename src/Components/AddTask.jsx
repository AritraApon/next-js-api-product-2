"use client";

import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select } from "@heroui/react";

export function AddTask({ createATask }) {
  return (
    <Modal>
      <Button variant="secondary">Add a Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add a Task</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                {/* Form starts here */}
                <form action={createATask} className="flex flex-col gap-4">

                  {/* name এবং type এখন Input-এর ভেতর */}
                  <TextField className="w-full">
                    <Label>Title</Label>
                    <Input name="name" type="text" placeholder="Enter your Task title" />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Description</Label>
                    <Input name="description" type="text" placeholder="Enter your task description" />
                  </TextField>

                  {/* Status Select - IDs থেকে স্পেস মুছে দেওয়া হয়েছে */}
                  <Select name="status" className="w-[256px]" placeholder="Select Status">
                    <Label>Status</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="todo" textValue="todo">
                          todo <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="in-progress" textValue="in-progress">
                          in-progress <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="done" textValue="done">
                          done <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Priority Select - IDs থেকে স্পেস মুছে দেওয়া হয়েছে */}
                  <Select name="priority" className="w-[256px]" placeholder="Select Priority">
                    <Label>Priority</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="high" textValue="high">
                          high <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="medium" textValue="medium">
                          medium <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="low" textValue="low">
                          low <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <Modal.Footer>
                    {/* slot="close" এর বদলে লাইব্রেরির নিয়ম অনুযায়ী ক্লোজ বাটন রাখুন */}
                    <Button type="button" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit">Submit Task</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}