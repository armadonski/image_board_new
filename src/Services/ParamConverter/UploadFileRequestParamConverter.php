<?php

namespace App\Services\ParamConverter;

use App\Model\UploadFileRequestModel;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\ParamConverterInterface;
use Symfony\Component\HttpFoundation\Request;

class UploadFileRequestParamConverter implements ParamConverterInterface
{
    public function apply(Request $request, ParamConverter $configuration)
    {
        $caption = $request->request->get('caption');
        $tags = $request->request->get('tags');
        $file = $request->files->get('file');
        $postRequest = (new UploadFileRequestModel())
            ->setFile($file)
            ->setCaption($caption)
            ->setTags($tags);
        /* @todo add validation */
        $request->attributes->set($configuration->getName(), $postRequest);
    }

    public function supports(ParamConverter $configuration)
    {
        return $configuration->getClass() === UploadFileRequestModel::class;
    }
}
