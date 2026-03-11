import { CustomListItem, CustomList } from "../ui/custom-list";
import Link from "next/link";
import { BookText } from "lucide-react";
export default function Status() {
  return (
    <div>
      <section className="my-4">
        <CustomList>
          <CustomListItem>
            <p className="font-bold">Currently:</p>
          </CustomListItem>

          <CustomListItem isSubItem>
            Studying CS @{" "}
            <Link href="https://kstu.edu.gh" target="_blank">
              Kumasi Technical University
            </Link>
          </CustomListItem>

          <CustomListItem isSubItem>
            Reading <BookText size={16} className="inline"/>:{" "}
            <Link
              href="https://learning.oreilly.com/library/view/hands-on-machine-learning/9798341607972/"
              target="_blank"
              >
              Hands-On Machine Learning with Scikit-Learn and PyTorch
            </Link>
          </CustomListItem>

          <CustomListItem isSubItem>
            Reading <BookText size={16} className="inline"/>:{" "}
            <Link
              href="https://learning.oreilly.com/library/view/fundamentals-of-devops/9781098174583/"
              target="_blank"
              >
              Fundamentals of DevOps and Software Delivery
            </Link>
          </CustomListItem>
        </CustomList>
      </section>

      <section className="my-4">
        <CustomList>
          <CustomListItem>
            <p className="font-bold">Recently:</p>
          </CustomListItem>
          <CustomListItem isSubItem>
            Software Developer intern @{" "}
            <Link href="https://microlynxe.com/" target="_blank">
              Microlynxe Systems Ltd
            </Link>
          </CustomListItem>
          <CustomListItem isSubItem>
            Club Lead @{" "}
            <Link href="https://amalitech.com" target="_blank">
              AmaliTech Coding Club KsTU
            </Link>
          </CustomListItem>
        </CustomList>
      </section>

      <section className="my-4">
        <CustomList>
          <CustomListItem>
            I <Link href="/writing">write</Link>.
          </CustomListItem>
        </CustomList>
      </section>

      <section className="my-4">
        <CustomList>
          <CustomListItem>
            View my{" "}
            <a href="/resume.pdf">
              resume
            </a>
            .
          </CustomListItem>
        </CustomList>
      </section>
    </div>
  );
}
