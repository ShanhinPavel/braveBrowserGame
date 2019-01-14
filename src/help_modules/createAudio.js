import createElement from './createElement';

/*
*This function creates audio conmponent which contains audio tag*
*and source tag which are set with source path*
 */
export default function () {
  const audioTag = createElement('audio', { class: 'audio' });
  const sourceElement = createElement('source', { class: 'audio__source' });

  audioTag.appendChild(sourceElement);
  return audioTag;
}
