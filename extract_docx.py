import zipfile
import xml.etree.ElementTree as ET

def extract_text_from_docx(docx_path):
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
        
    tree = ET.fromstring(xml_content)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    text = []
    for paragraph in tree.findall('.//w:p', ns):
        para_text = []
        for run in paragraph.findall('.//w:r', ns):
            t = run.find('w:t', ns)
            if t is not None and t.text:
                para_text.append(t.text)
        if para_text:
            text.append(''.join(para_text))
            
    print('\n'.join(text))

if __name__ == '__main__':
    extract_text_from_docx('第2回次世代自治共創会議_260420（案内版）.docx')
