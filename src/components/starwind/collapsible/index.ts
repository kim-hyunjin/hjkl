import CollapsiblePanel from "./CollapsiblePanel.astro";
import CollapsibleRoot from "./CollapsibleRoot.astro";
import CollapsibleTrigger from "./CollapsibleTrigger.astro";
import { collapsiblePanel, collapsibleRoot, collapsibleTrigger } from "./variants";

const CollapsibleVariants = {
  collapsibleRoot,
  collapsibleTrigger,
  collapsiblePanel,
};

const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
};

export { Collapsible, CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger, CollapsibleVariants };

export default Collapsible;
