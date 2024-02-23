import { useState } from "react";
import dummy from "./dummydata.json";

export default function Search() {
  const [search, setSearch] = useState("");
  const [member] = useState(dummy.data);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filterResult = member.filter((p) => {
    return (
      p.title
        .replace(" ", "")
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().replace(" ", "")) ||
      p.body
        .replace(" ", "")
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().replace(" ", "")) ||
      p.tag
        .replace(" ", "")
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().replace(" ", "")) ||
      p.nickname
        .replace(" ", "")
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().replace(" ", ""))
    );
  });

  return (
    <div>
      <div className="content">
        <input type="text" value={search} onChange={onChange}></input>
        {search !== "" &&
          filterResult
            .filter((member) => member !== null)
            .map((member) => (
              <div>
                <span>{member.title} </span>
                <span> {member.body} </span>
                <span> {member.nickname}</span>
              </div>
            ))}
      </div>
    </div>
  );
}
