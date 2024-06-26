import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from "../components/MailIcon";
import { LockIcon } from "../components/LockIcon";
import { PlusIcon } from "../components/PlusIcon";
import CheckBox from "../components/CheckBox";
import RadioGroups from "../components/RadioGroups";
import Auticompletes from "../components/Autocompletes";
import ImageUpload from "@/components/ImageUpload";


export default function CRUDModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="">
      <Button onPress={onOpen} color="primary" endContent={<PlusIcon />} className="shadow-xl">
        Add New
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="overflow-hidden"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add New</ModalHeader>

              <ModalBody style={{ maxHeight: "60vh" }} className="flex gap-6 h-full">
                <div className="flex gap-6 flex-col overflow-auto">

                  <Input
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />

                  <Input
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                  />

                  <CheckBox />

                  <Auticompletes />

                  <RadioGroups />

                  <ImageUpload />

                </div>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
