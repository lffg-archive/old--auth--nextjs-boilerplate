import { Response } from 'express';
import Router from 'next/router';

export default function redirect(to: string, res?: Response) {
  if (res) {
    res.writeHead(302, {
      Location: to
    });
    res.end();
  } else {
    Router.replace(to);
  }
}
