import { find, isEmpty, map } from "lodash";
import iconPackage from "@/assets/images/icoPackage.png";
import iconOption from "@/assets/images/iconOption.png";
import Image from "next/image";
import { Input } from "antd";
import icoTrash from "@/assets/images/trash.png";
import "../../tableStyle.css";

const TableData = ({ data, onRemoveItem }) => {
  return (
    <div className="table-body">
      <div className="list-row-item-header">
        <div className="text-left" style={{ width: "250px" }}>
          Package Name
        </div>
        <div className="text-left" style={{ width: "250px" }}>
          Service
        </div>
        <div className="text-left" style={{ width: "150px" }}>
          Price
        </div>
        <div className="text-left" style={{ width: "100px" }}>
          Estimate Time
        </div>
        <div className="text-left" style={{marginRight: '2px'}} >Action</div>
      </div>
      <div>
        {map(data, (item) => (
          <RowBlock
            item={item}
            key={`row-block-${item?.id}`}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

const RowBlock = ({ item, onRemoveItem }) => {
  const haveChildren = !isEmpty(item?.children);

  return (
    <>
      <div className={`list-row-item ${haveChildren ? "expandable" : ""}`}>
        <RowItem item={item} isRootPackage={haveChildren} />
        <div style={{ textAlign: "end" }}>
          <Image
            src={icoTrash}
            width={30}
            height={30}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => onRemoveItem({ deleteId: item?.id })}
          />
        </div>
      </div>
      {haveChildren ? (
        <>
          {map(item?.children, (children) => (
            <div className={`list-row-item`} key={children?.id}>
              <RowItem item={children} />
              <div style={{ textAlign: "end" }}>
                <Image
                  style={{ cursor: "pointer" }}
                  src={icoTrash}
                  width={30}
                  height={30}
                  alt=""
                  onClick={() =>
                    onRemoveItem({
                      deleteId: children?.id,
                      rootId: children?.idPackage,
                    })
                  }
                />
              </div>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};
// test reabse from main

const RowItem = ({ item, isRootPackage = false }) => {
  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", width: "250px" }}
        className="text-left"
        id={`row-item-${item?.id}`}
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
      <div className="text-left" style={{ width: "250px" }}>
        <p>{item?.service} &nbsp;</p>
      </div>
      <div className="text-left" style={{ width: "150px" }}>
        {isRootPackage ? <p>&nbsp;</p> : <Input defaultValue={item?.price} />}
      </div>
      <div className="text-left" style={{ width: "100px" }}>
        {isRootPackage ? <p>&nbsp;</p> : <Input defaultValue={item?.time} />}
      </div>
    </>
  );
};

export default TableData;
