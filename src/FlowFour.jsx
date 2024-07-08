import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const FlowFour = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center flex-col gap-10 mt-7 mb-10">
      <div className="w-4/5 flex items-center justify-start ml-14">
        <FontAwesomeIcon
          className="h-7"
          icon={faArrowLeft}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <div className="f1-r1 border rounded-xl w-4/5 p-8">
        <h1 className="font-bold text-2xl">Riddle 1</h1>
        <br />
        <p>
          I'm a wall that holds knowledge grand, Where scholars seek to
          understand. Golden keys on stones so tall, Unlocking wisdom for one
          and all. What am I?
        </p>
        <button
          type="button"
          className="w-2/5 px-3 py-3 border rounded-xl mt-5 text-white"
          style={{ backgroundColor: "#ECA555" }}
        >
          Upload
        </button>
      </div>
      <div className="f1-r2 border rounded-xl w-4/5 p-8">
        <h1 className="font-bold text-2xl">Riddle 2</h1>
        <br />
        <p>
          Through me all must pass and see, A College born in 1996, you see. I
          greet each seeker, young and old, Where learning's treasure doth
          unfold. What am I?
        </p>
        <button
          type="button"
          className="w-2/5 px-3 py-3 border rounded-xl mt-5 text-white"
          style={{ backgroundColor: "#ECA555" }}
        >
          Upload
        </button>
      </div>
      <div className="f1-r3 border rounded-xl w-4/5 p-8">
        <h1 className="font-bold text-2xl">Riddle 3</h1>
        <br />
        <p>
          In the heart of the campus, I start your day, Where friends and
          colleagues gather to stay. A morning haven, with coffee in hand, A
          beautiful spot where moments are planned. What am I?
        </p>
        <button
          type="button"
          className="w-2/5 px-3 py-3 border rounded-xl mt-5 text-white"
          style={{ backgroundColor: "#ECA555" }}
        >
          Upload
        </button>
      </div>
      <div className="f1-r4 border rounded-xl w-4/5 p-8">
        <h1 className="font-bold text-2xl">Riddle 4</h1>
        <br />
        <p>
          Within university walls, I stand with pride, Offering a cozy spot
          where cultures collide. My name reflects a distant land's charm, Where
          students gather, feeling warm. What am I?
        </p>
        <button
          type="button"
          className="w-2/5 px-3 py-3 border rounded-xl mt-5 text-white"
          style={{ backgroundColor: "#ECA555" }}
        >
          Upload
        </button>
      </div>
      <div className="f1-r5 border rounded-xl w-4/5 p-8">
        <h1 className="font-bold text-2xl">Riddle 5</h1>
        <br />
        <p>
          I stand tall and proud, a marker of the past, Where memories linger,
          and friendships last. Names etched in stone, forever they stay, A
          testament to journeys made along the way. I tell tales of those who
          once walked these halls, Now spread far and wide, answering life's
          calls. What am I?
        </p>
        <button
          type="button"
          className="w-2/5 px-3 py-3 border rounded-xl mt-5 text-white"
          style={{ backgroundColor: "#ECA555" }}
        >
          Upload
        </button>
      </div>
      <div className="f1-r6 border rounded-xl w-4/5 p-8">
        <h1 className="font-bold text-2xl">Riddle 6</h1>
        <br />
        <p>
          In me, hands craft and minds refine, Where practical workshops
          brightly shine. Here, skills are born from knowledge pure, In a place
          where learning's hands-on allure. What am I?
        </p>
        <button
          type="button"
          className="w-2/5 px-3 py-3 border rounded-xl mt-5 text-white"
          style={{ backgroundColor: "#ECA555" }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FlowFour;
