import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const UsersTable = () => {
  const { clint } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [searchDate, setSearchDate] = useState('');
  
  return (
    <div className="overflow-x-auto">
      <div className="lg:flex items-center gap-4  hidden ld:visible flex-row mb-6">
            <div className="form-control w-full">              
            <input
              type="text"
              placeholder="بحث بالاسم"
              className="input input-bordered w-1/2 md:w-auto"
              onChange={(e) => setSearch(e.target.value)}
            />
            </div>
            <div className="form-control w-full">
            <input
              type="date"
              placeholder="بحث بالتاريخ"
              className="input input-bordered w-1/2 md:w-auto"
              onChange={(e) => setSearchDate(e.target.value)}
            />
            </div>
          </div>
         
      <table className="table">
        {/* head */}
        <thead className="bg-green text-white">
          <tr className="text-center">
            <th></th>
            <th>اسم العميل</th>
            <th>حساب مدين</th>
            <th>سعر الشركة</th>
            <th>سعر العميل</th>
            <th>ربح</th>
            <th>الشركة المنفذة</th>
            <th>نفذت مع</th>
            <th>طيران+اقلاع</th>
            <th>من مطار/مطار</th>
            <th>البلد+الرقم</th>
            <th>منفذها لدينا</th>
            <th>تاريخ الحجز</th>
            <th>تاريخ السفر</th>
            <th>ملاحظات</th>
          </tr>
        </thead>
        <tbody>
          {clint.
            filter((item) => {
              if (!(search.toLowerCase() === '')){
                return item.costumerName.includes(search);
              }
              else if(!(searchDate.toLowerCase() === '')){
                return item.bookingDate.includes(searchDate);
              }
              else{
                return item
              }
            })
          
          .map((item, index) => (
            <tr key={index + 1} className="hover:bg-gray-100 text-center">
              <th>{index + 1}</th>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  {item.costumerName}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  $ {item.DebitAccount}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  $ {item.companyPrice}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  $ {item.costumerPrice}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>$ {item.profit}</Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  {item.implementingCompany}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>{item.doneWith}</Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  {item.flightTakeoff}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>{item.airPorts}</Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  {item.countryPhone}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>{item.outlet}</Link>
              </td>
              <td className="whitespace-nowrap">
                <Link to={`/update-clint/${item._id}`}>{item.bookingDate.replace(/(\d{4}-\d{2}-\d{2})T.*/, "$1")}</Link>
              </td>
              <td className="whitespace-nowrap">
                <Link to={`/update-clint/${item._id}`}>
                  {item.travelDate.replace(/(\d{4}-\d{2}-\d{2})T.*/, "$1")}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>{item.comments}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
