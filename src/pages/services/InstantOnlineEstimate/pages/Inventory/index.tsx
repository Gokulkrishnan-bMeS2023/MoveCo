import RecaptchaWrapper from "../../../../../utils/RecaptchaWrapper";
import InventoryContent from "./InventoryContent";

const Inventory = () => {
  return (
    <RecaptchaWrapper>
      <InventoryContent />
    </RecaptchaWrapper>
  );
};

export default Inventory;