
export class TabLink {
  constructor(element,parent) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element=element
    this.parent=parent
    // Get the custom data attribute on the Link
    // this.data;
    this.data=element.dataset.tab
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement=document.querySelector(`.tabs-item[data-tab='${this.data}']`)
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem=new TabItem(this.itemElement)
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click',this.select.bind(this))
  };

  select() {
    if(this.parent.current==this)
      return
    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('tabs-link-selected')
    // Call the select method on the item associated with this link
    this.tabItem.select()
    this.parent.swap(this)
  }
  deselect(){
    this.element.classList.remove('tabs-link-selected')
    this.tabItem.deselect()
    return this.tabItem
  }
  open(){
    this.tabItem.fill()
  }
}

export class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element=element
  }

  select() {
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    //this.element.classList.add('tabs-item-selected')
    this.open()
  }
  deselect(){
    //this.element.classList.remove('tabs-item-selected')
    this.close()
  }
  close(){
    this.element.style.opacity=0
  }
  open(){
    this.element.style.opacity=0;
  }
  clear(){
      this.element.classList.remove('tabs-item-selected')
      this.element.removeAttribute('style')
  }
  fill(){
      this.element.classList.add('tabs-item-selected')
      this.element.style.opacity=1;
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/ 