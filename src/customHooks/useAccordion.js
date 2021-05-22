import React, { useState } from "react";

//кастомный хук
export default function useAccordion(defaultOpenId) {
  const [openItemId, setOpenItem] = useState(defaultOpenId);
  const toggleOpenItem = id => () => setOpenItem(id === openItemId ? null : id);
  const isOpenItem = id => openItemId === id;

  return { isOpenItem, toggleOpenItem };
}
