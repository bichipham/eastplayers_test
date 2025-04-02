import { find, isEmpty, map } from "lodash";
import iconPackage from "@/assets/images/icoPackage.png";
import iconOption from "@/assets/images/iconOption.png";
import Image from "next/image";
import { Input } from "antd";
import icoTrash from "@/assets/images/trash.png";
import "../../tableStyle.css";

const TableData = ({ data }) => {
  return (
    <div className="table-body">
      <div className="list-row-item-header">
        <div className="text-left" style={{ width: "350px" }}>
          Package Name
        </div>
        <div className="text-left" style={{ width: "350px" }}>
          Service
        </div>
        <div className="text-left" style={{ width: "200px" }}>
          Price
        </div>
        <div className="text-left" style={{ width: "200px" }}>
          Estimate Time
        </div>
        <div className="text-left" style={{ width: "150px" }}>
          Action
        </div>
      </div>
      <div>
        {map(data, (item) => (
          <RowBlock item={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

const RowBlock = ({ item }) => {
  const haveChildren = !isEmpty(item?.children);

  return (
    <>
      <div className={`list-row-item ${haveChildren ? "expandable" : ""}`}>
        <RowItem item={item} isRootPackage={haveChildren} />
        <div style={{ width: "150px", textAlign: "end" }}>
					<Image src={icoTrash} width={30} height={30} alt="" style={{cursor: 'pointer'}} />
        </div>
      </div>
      {haveChildren ? (
        <>
          {map(item?.children, (children) => (
            <div className={`list-row-item`} key={children?.id}>
              <RowItem item={children} />
              <div style={{ width: "100px", textAlign: "end" }}><Image style={{cursor: 'pointer'}} src={icoTrash} width={30} height={30} alt="" /></div>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

const RowItem = ({ item, isRootPackage = false }) => {
  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", width: "350px" }}
        className="text-left"
      >
        <Image
          src={item?.isOption ? iconOption : iconPackage}
          alt="package"
          width={50}
          height={50}
          style={{ marginRight: "10px" }}
        />
        {item?.name}
      </div>
      <div className="text-left" style={{ width: "350px" }}>
        {item?.service}
      </div>
      {isRootPackage ? null : (
        <div className="text-left" style={{ width: "200px" }}>
          <Input defaultValue={item?.price} />
        </div>
      )}
      {isRootPackage ? null : (
        <div className="text-left" style={{ width: "200px" }}>
          <Input defaultValue={item?.time} />
        </div>
      )}
    </>
  );
};

export default TableData;
