/* eslint-disable space-before-function-paren */
interface Mapped<Type> {
  [id: string]: Type;
}

// Object holding the all the handlers for events mapped with the event names
const events: Mapped<Function[]> = {}

/**
 * Call all the registered handlers for the given event name with the given arguments
 *
 * @param {string} name of the event
 * @param {any[]} arguments to be passed to the handlers
 */
export function fireEvent(name: string, ...args: any[]): void {
  // If no such event is registered, then no need to call
  if (!events[name]) { return }
  const eventListeners = events[name]!

  // Calling each of the listeners in the order of their registration
  eventListeners.forEach((listener) => {
    listener(...args)
  })
}

/**
 * Removes a given event from events registered
 *
 * @param {string} name of the event to remove
 */
export function removeEvent(eventName: string) {
  delete events[eventName]
}

/**
 * Registers the given listener for the given event
 *
 * @param {string} Name of event
 * @param {Function} listener to be registered
 * @param {boolean} if parameter once set to `true` calls this listener only the first time the given event is fired
 */
export function registerEventListener(eventName: string, listener: Function, once: boolean = false): void {
  if (!events[eventName]) { events[eventName] = [] }

  const eventListeners = events[eventName]!

  // if the listener not intended to be run only once, directly add the listener and return immediately
  if (!once) {
    eventListeners.push(listener)
    return
  }

  // Since, listener would be added to the end, hence the index would be equal to the current number of listeners
  const indexOfListener = eventListeners.length

  /**
   * Function which itself calls the given listener function, and then de-registers itself as one of the listeners for the given event
   */
  const oneTimeListener = (...args: any[]) => {
    listener(...args)

    // Remove this listener
    eventListeners.splice(indexOfListener, 1)
  }

  // Register one time listener for the given event
  eventListeners.push(oneTimeListener)
}

export const EventBus = {
  $emit: fireEvent,
  $off: removeEvent,
  $on: registerEventListener
}
