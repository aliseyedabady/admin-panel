import React from "react";
import "./style.scss";
const CustomTable = () => {
  return (
    <div className="w-full overflow-x-auto  p-6 ">
      <table className=" border-collapse card-wrapper-shadow rounded-[8px]">
        <tr>
          <th className="font-semibold text-sm ">Company</th>
          <th className="font-semibold text-sm ">Contact</th>
          <th className="font-semibold text-sm ">Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    </div>
  );
};

export default CustomTable;
