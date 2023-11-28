declare module 'render-wake' {
    function keepAlive(renderAppUrl?: string, pingInterval?: number): void;
  
    export = keepAlive;
  }
  
  