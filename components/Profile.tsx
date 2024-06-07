import PromptCard from "./PromptCard";
import { ProfileType } from "@/types/custom-types";
import { PromptType } from "@/types/custom-types";

const Profile = ({ name, desc, data }: ProfileType) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post: PromptType) => (
          <PromptCard
            key={post._id}
            post={post}
            // handleEdit={() => handleEdit && handleEdit(post)}
            // handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
